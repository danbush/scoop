import urlMetadata from 'url-metadata';
import * as htmlparser2 from 'htmlparser2';
import fetch from 'node-fetch';
import { decode } from 'html-entities';


async function fetchUrl(url: string) {
	try {
		const response = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36' } });
		const body = await response.text();

		return body;
	} catch (error) {
		console.error('Error fetching URL:', error);
		throw error; // Re-throw the error to handle it outside this function if needed
	}
}

async function fetchAppleTouchIcon(url: string) {
	try {
		const html = await fetchUrl(url);

		// Regular expression to extract the Apple Touch Icon URL
		const appleTouchIconRegex = /<link[^>]*rel=["']apple-touch-icon(-precomposed)?["'][^>]*href=["']([^"']+)["'][^>]*\/?>/i;
		const match = html.match(appleTouchIconRegex);

		if (match) {
			let appleTouchIconUrl = match[2];

			// Check if the URL is absolute
			if (!appleTouchIconUrl.startsWith('http://') && !appleTouchIconUrl.startsWith('https://')) {
				// Modify the URL to be an absolute URL using the base URL of the original page
				const corsProxy = 'http://localhost:8181/';
				const modifiedUrl = url.replace(corsProxy, ''); // Remove the corsProxy part from the URL
				const baseDomainMatch = modifiedUrl.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/i);
				if (baseDomainMatch && baseDomainMatch[0]) {
					const baseDomain = baseDomainMatch[0].replace('https://', '').replace('www.', '');
					const baseURL = "https://" + baseDomain;
					appleTouchIconUrl = baseURL + appleTouchIconUrl;
				} else {
					console.log('Invalid URL format.');
					return null;
				}
			}

			return appleTouchIconUrl;
		} else {
			// Regular expression to extract the regular favicon URL
			const faviconRegex = /<link[^>]*rel=["']icon["'][^>]*href=["']([^"']+)["'][^>]*\/?>/i;
			const faviconMatch = html.match(faviconRegex);

			if (faviconMatch) {
				const faviconUrl = faviconMatch[1];
				return faviconUrl;
			} else {
				// Regular expression to extract the shortcut favicon URL
				const shortcutIconRegex = /<link[^>]*rel=["']shortcut icon["'][^>]*href=["']([^"']+)["'][^>]*\/?>/i;
				const shortcutIconMatch = html.match(shortcutIconRegex);
				if (shortcutIconMatch) {
					const shortcutIconUrl = shortcutIconMatch[1];
					return shortcutIconUrl;
				} else {
					// Fallback to using the base domain to fetch the icon from icon.horse
					const corsProxy = 'http://localhost:8181/';
					const modifiedUrl = url.replace(corsProxy, ''); // Remove the corsProxy part from the URL
					const baseDomainMatch = modifiedUrl.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/i);
					if (baseDomainMatch && baseDomainMatch[0]) {
						const baseDomain = baseDomainMatch[0].replace('https://', '').replace('www.', '');
						const shortcutIconUrl = "https://icon.horse/icon/" + baseDomain;
						return shortcutIconUrl;
					} else {
						console.log('Invalid URL format.');
						return null;
					}
				}
			}
		}
	} catch (error) {
		console.error('Error fetching URL:', error);
		return null;
	}
}


function removeHTMLTags(html: any) {
	return html
		.replace(/<!\[CDATA\[(.*?)]]>/gs, (_: string, content: string) => {
			return content ? content : ''; // Keep the content inside CDATA and remove the CDATA tags
		})
		.replace(/<figcaption>.*?<\/figcaption>/gs, '') // Remove figcaption tags
		.replace(/<a[^>]*>(.*?)<\/a>/g, (_: string, content: string) => {
			return content ? `[${content}]` : ''; // Wrap content inside <a> tags with []
		})
		.replace('&iacute;', 'í')
		.replace(/<[^>]+>/g, ''); // Remove other HTML tags
}

function removeThumborFromUrl(url: string): string {
	// Regular expression to match Thumbor part of the URL
	const thumborRegex = /\/thumbor\/(filters:[^/]*\/)?(?:.*?\/cdn\.vox-cdn\.com)/;

	// Replace the Thumbor part with an empty string to remove it
	return url.replace(thumborRegex, '');
}

function getBaseUrl(url: string) {
	const parsedUrl = new URL(url);
	return `${parsedUrl.protocol}//${parsedUrl.hostname}`;
}


export async function chocolateSauce(url: string, item: number = 0, starter: number = 0) {
	// Set some defaults
	url = 'http://localhost:8181/' + url;
	var article: any = {};
	var article_title: string = '';
	var article_body: string = '';
	var article_image: string = '';
	var article_logo: string = '';
	var article_url: string = '';
	var article_publisher: string = '';
	var article_publisher_url: string = '';
	var article_published_date: any = '';

	// Check if it is rss/atom, or other
	if (url.includes('.rss') || url.includes('.atom') || url.includes('feed.') || url.includes('feeds.') || url.includes('.xml') || url.includes('/feed') || url.includes('/rss')) {
		try {
			const rawFeed = await fetchUrl(url);
			const feed = htmlparser2.parseFeed(rawFeed, {
				recognizeCDATA: true,
				decodeEntities: true,
				recognizeSelfClosing: true,
			});
			article = feed;
			// Check if the id is a link (starts with "http://" or "https://")
			if (feed.items[item].id.startsWith("http://") || feed.items[item].id.startsWith("https://")) {
				article_url = feed.items[item].id;
			} else {
				// Fallback to finding <link> tag for URL
				const linkUrlRegex = /<item>.*?<link>(.*?)<\/link>.*?<\/item>/is;
				const linkMatch = rawFeed.match(linkUrlRegex);
				if (linkMatch) {
					article_url = removeHTMLTags(linkMatch[1].replace('<link>', '').replace('</link>', '')).trim();
				} else {
					// If no link tag found and the id is not a link, fallback to using the original id
					article_url = "no article url, what the fuck dude";
				}
			}

			article_title = removeHTMLTags(feed.items[item].title);
			article_body = removeHTMLTags(decode(feed.items[item].description));
			article_image = feed.items[item].media[item];
			article_logo = null
			article_publisher = removeHTMLTags(feed.title)
			article_publisher_url = getBaseUrl(article_url);
			article_published_date = feed.items[item].pubDate;

			const proxied_article_url = "http://localhost:8181/" + article_url;

			if (typeof article_image === 'object') {
				const mediaContentRegex = /<media:content[^>]*url=["']([^"']+)["'][^>]*\/?>/i;
				const mediaContentMatch = rawFeed.match(mediaContentRegex);

				if (mediaContentMatch) {
					article_image = mediaContentMatch[1];
				}
			}
			if ((!article_image || typeof article_image !== 'string') && !article_publisher.includes('NYT')) {
				const metadata: any = await urlMetadata(proxied_article_url, {
					requestHeaders: {
						'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
						'Origin': 'http://localhost:8181',
						'X-Requested-With': 'XMLHttpRequest'
					}
				});
				article_image = removeThumborFromUrl(metadata['og:image']);
			} else if (article_publisher.includes('NYT')) {
				const html = await fetchUrl(url);
				const badNYTRegex = /<item>(?:.|\n)*?<media:content[^>]*url="([^"]+)"/gi;
				const badNYTMatches = Array.from(html.matchAll(badNYTRegex));
				
				// Create an array to store the matched images
				const nytImages = [];
				// Process each match and extract the correct article images
				for (const match of badNYTMatches) {
					const imageUrl = match[1];
					const articleImage = imageUrl.replace('-moth', '-jumbo').replace(/&quot;/g, "").replace('-v2', '');
					nytImages.push(articleImage);
				}
				article_image = nytImages[item]
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
				article_publisher,
				article_publisher_url,
				article_published_date
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
				article_publisher,
				article_publisher_url,
				article_published_date
			};
		}
	} else {
		try {
			const metadata: any = await urlMetadata(url, {
				requestHeaders: { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36' },
			});
			article = metadata;

			article_url = article.canonical;
			article_image = article['og:image'];
			article_title = article['og:title'];
			article_publisher = article['og:site_name'];
			const proxied_article_url = "http://localhost:8181/" + article_url;
			if (article.jsonld.articlebody) {
				article_body = article.jsonld.articleBody.substring(0, 350) + '...';
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
				article_publisher,
				article_publisher_url,
				article_published_date
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
				article_publisher,
				article_publisher_url,
				article_published_date
			};
		}
	}
}