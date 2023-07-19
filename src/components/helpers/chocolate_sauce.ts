import faviconFetch from 'favicon-fetch';
import urlMetadata from 'url-metadata';
import * as htmlparser2 from 'htmlparser2';

export function chocolateSauce(url: string) {
  // Set some defaults
  url = 'http://localhost:8181/' + url;
  var article: any = {};
  var article_title: string = '';
  var article_body: string = '';
  var article_image: string = '';
  var article_logo: string = '';
  var article_url: string = '';

  // Check if it is rss/atom, or other
  if (url.includes('.rss') || url.includes('.atom')) {
	article = htmlparser2.parseFeed(content, options);
	return Promise.resolve({
	  article,
	  article_title,
	  article_body,
	  article_image,
	  article_logo,
	  article_url,
	});
  } else {
	return urlMetadata(url, {
	  requestHeaders: {},
	})
	  .then((metadata: any) => {
		article = metadata;
		article_body = article.jsonld.articleBody.substring(0, 1000) + '...';
		article_logo = article.jsonld.publisher.logo.url;
		article_url = article.canonical;
		article_image = article['og:image'];
		article_title = article['og:title'];

		// do stuff with the metadata

		return {
		  article,
		  article_title,
		  article_body,
		  article_image,
		  article_logo,
		  article_url,
		};
	  })
	  .catch((err) => {
		console.log(err);
		// Return a default value or an empty object in case of an error
		return {
		  article,
		  article_title,
		  article_body,
		  article_image,
		  article_logo,
		  article_url,
		};
	  });
  }
}
