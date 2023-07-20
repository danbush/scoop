import urlMetadata from 'url-metadata';
import * as htmlparser2 from 'htmlparser2';
import fetch from 'node-fetch';


async function fetchUrl(url: string) {
  try {
	const response = await fetch(url, { headers: {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36'}});
	const body = await response.text();
	return body;
  } catch (error) {
	console.error('Error fetching URL:', error);
	throw error; // Re-throw the error to handle it outside this function if needed
  }
}

async function fetchAppleTouchIcon(url) {
  try {
	const html = await fetchUrl(url, { headers: {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36'}});

	// Regular expression to extract the Apple Touch Icon URL
	const appleTouchIconRegex = /<link[^>]*rel=["']apple-touch-icon(-precomposed)?["'][^>]*href=["']([^"']+)["'][^>]*\/?>/i;
	const match = html.match(appleTouchIconRegex);

	if (match) {
	  const appleTouchIconUrl = match[2];
	  return appleTouchIconUrl;
	} else {
	  console.log('Apple Touch Icon not found.');
	  return null;
	}
  } catch (error) {
	console.error('Error fetching URL:', error);
	return null;
  }
}

export async function chocolateSauce(url: string) {
  // Set some defaults
  url = 'http://localhost:8181/' + url;
  var article: any = {};
  var article_title: string = '';
  var article_body: string = '';
  var article_image: string = '';
  var article_logo: string = '';
  var article_url: string = '';
  var article_publisher: string = '';

  // Check if it is rss/atom, or other
  if (url.includes('.rss') || url.includes('.atom') || url.includes('feed.') || url.includes('feeds.') || url.includes('.xml') || url.includes('/feed/')) {
	try {
	  const rawFeed = await fetchUrl(url);
	  const feed = htmlparser2.parseFeed(rawFeed, {
		recognizeCDATA: true,
		decodeEntities: true,
		recognizeSelfClosing: true,
	  });
	  article = feed;
	  article_url = feed.items[0].id;
	  article_title = feed.items[0].title;
	  article_body = feed.items[0].description;
	  article_image = feed.items[0].media[0];
	  article_logo = null
	  article_publisher = feed.title
	  
	  const proxied_article_url = "http://localhost:8181/" + article_url;

	  if (article_image === undefined || article_image.length === 0 || typeof article_image != 'string') {
		const metadata: any = await urlMetadata(proxied_article_url, {
			requestHeaders: {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36','Origin': 'https://example.reqbin.com' , 'X-Requested-With':'XMLHttpRequest'}
		  });
		console.log(metadata)
		article_image = metadata['og:image'];
	  }
	  
	  const appleTouchIconUrl = await fetchAppleTouchIcon(proxied_article_url);
		if (appleTouchIconUrl) {
		  article_logo = appleTouchIconUrl;
		} else {
		  console.log('Apple Touch Icon not found for the given URL.');
		}

	  return {
		article,
		article_title,
		article_body,
		article_image,
		article_logo,
		article_url,
		article_publisher
	  };
	} catch (err) {
	  console.log(err);
	  // Return a default value or an empty object in case of an error
	  return {
		article,
		article_title,
		article_body,
		article_image,
		article_logo,
		article_url,
		article_publisher
	  };
	}
  } else {
	try {
	  const metadata: any = await urlMetadata(url, {
		requestHeaders: {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36'},
	  });
	  article = metadata;
	  console.log(article)
	  article_url = article.canonical;
	  article_image = article['og:image'];
	  article_title = article['og:title'];
	  article_publisher = article['og:site_name'];
	  const proxied_article_url = "http://localhost:8181/" + article_url;
	  if (article.jsonld.articlebody) {
		article_body = article.jsonld.articleBody.substring(0, 1000) + '...';
	  } else {
		  article_body = article.description;
	  }
	  const appleTouchIconUrl = await fetchAppleTouchIcon(proxied_article_url);
	  if (appleTouchIconUrl) {
		article_logo = appleTouchIconUrl;
			
	  } else {
		console.log('Apple Touch Icon not found for the given URL.');
	  }

	  return {
		article,
		article_title,
		article_body,
		article_image,
		article_logo,
		article_url,
		article_publisher
	  };
	} catch (err) {
	  console.log(err);
	  // Return a default value or an empty object in case of an error
	  return {
		article,
		article_title,
		article_body,
		article_image,
		article_logo,
		article_url,
		article_publisher
	  };
	}
  }
}
