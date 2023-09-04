/*****************************
Chocolate Sauce
description: Content ingestion system
dev owner: Dan Bush
tags: rss mastodon fetch get content
*****************************/

import urlMetadata from 'url-metadata';
import * as htmlparser2 from 'htmlparser2';
import fetch from 'node-fetch';
import { decode } from 'html-entities';
import { timeAgo } from './sprinkle_timeAgo'

const proxyUrl: string = 'http://localhost:8181'


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
				const corsProxy = proxyUrl + '/';
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
			
			// VERY VERY TEMPORARY, JUST FOR FRONTPAGE.TODAY WHILE 404MEDIA FIGURES ITSELF OUT
			if (appleTouchIconUrl.includes('404media')) {
				appleTouchIconUrl = "https://icon.horse/icon/" + '404media.co'
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
					const corsProxy = proxyUrl + '/';
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
		.replace('&lt;/p&gt;', '')
		.replace('&lt;p&gt;', '')
		.replace(/<\/ul>/g, '\n\n')
		.replace(/<\/p>/g, '\n\n')
		.replace(/<\/li>/g, '\n\n')
		.replace(/&pound;/g, '£')
		.replace(/&euro;/g, '€')
		.replace(/&quot;/g, '"')
		.replace(/<[^>]+>/g, '')
		.replace(/\s([^\s<]+)\s*$/,'\u00A0$1'); // Remove other HTML tags
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

// Function to remove URLs from the text
function removeUrls(text: string): string {
	// Regular expression to match URLs
	const urlRegex = /(https?:\/\/[^\s]+)/g;
	// Replace URLs with an empty string to remove them
	return text.replace(urlRegex, '');
}

function isMastodonRSS(xmlString: string): boolean {
	// Check for the presence of the "generator" element starting with "Mastodon"
	const generatorRegex = /<generator>[^<]*Mastodon[^<]*<\/generator>/i;
	return generatorRegex.test(xmlString);
}

async function parseMastodonRssItem(rawItem: string) {
	try {
		const descriptionRegex = /<item>[\s\S]*?<description>(.*?)<\/description>[\s\S]*?<\/item>/i;
		const pubDateRegex = /<pubDate>(.*?)<\/pubDate>/s;
		const avatarUrlRegex = /<image>\s*<url>(.*?)<\/url>[\s\S]*?<\/image>/;
		const titleRegex = /<title>(.*?)<\/title>/i;
		const publisherLinkRegex = /<link>(.*?)<\/link>/i;
		const itemLinkRegex = /<item>[\s\S]*?<link>(.*?)<\/link>[\s\S]*?<\/item>/i;
		const imageUrlRegex =  /<media:content[^>]*\burl="([^"]+)"/i;
		
		

		const descriptionMatch = rawItem.match(descriptionRegex);
		const pubDateMatch = rawItem.match(pubDateRegex);
		const imageMatch = rawItem.match(avatarUrlRegex);
		const titleMatch = rawItem.match(titleRegex);
		const publisherLinkMatch = rawItem.match(publisherLinkRegex);
		const itemLinkMatch = rawItem.match(itemLinkRegex);
		const imageUrlMatch = rawItem.match(imageUrlRegex);

		var article_body = descriptionMatch ? removeHTMLTags(decode(descriptionMatch[1].trim())) : '';
		const article_published_date = pubDateMatch ? timeAgo(Date.parse(pubDateMatch[1])) : '';
		const article_logo = imageMatch ? imageMatch[1] : '';
		const article_publisher = titleMatch ? titleMatch[1] : '';
		const article_publisher_url = publisherLinkMatch ? publisherLinkMatch[1] : '';
		const article_url = itemLinkMatch ? itemLinkMatch[1] : '';
		var article_image = '';
		
		
		var metadata: any = await urlMetadata(proxyUrl + '/' + article_url, {
			requestHeaders: {
				'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36',
				'Origin': proxyUrl,
				'X-Requested-With': 'XMLHttpRequest'
			}
		});
		
		article_body =  removeUrls(metadata.description)
		if (article_body.includes('Attached: 1 image')) {
			article_body = article_body.replace('Attached: 1 image\n\n', '');
			article_image = imageUrlMatch ? imageUrlMatch[1].replace(/<media:content[^>]*\burl="/, '') : '';
		}
		
		return { article_body, article_image, article_published_date, article_logo, article_publisher, article_publisher_url, article_url };
	} catch (error) {
		console.error('Error parsing Mastodon RSS item:', error);
		return null;
	}
}


export async function chocolateSauce(url: string, item: number = 0, starter: number = 0) {
	// Set some defaults
	url = proxyUrl + '/' + url;
	var article: any = {};
	var article_title: string = '';
	var article_body: string = '';
	var article_image: any = '';
	var article_logo: string | null = '';
	var article_url: string = '';
	var article_publisher: string = '';
	var article_publisher_url: string = '';
	var article_published_date: any = '';
	
	const rawFeed = await fetchUrl(url);
	
	if (isMastodonRSS(rawFeed)) {
		try {
			const masto_data = await parseMastodonRssItem(rawFeed)
			article_body = masto_data?.article_body
			article_published_date = masto_data?.article_published_date
			article_publisher = masto_data?.article_publisher ?? ''
			article_logo = masto_data?.article_logo ?? ''
			article_publisher_url = masto_data?.article_publisher_url ?? ''
			article_url = masto_data?.article_url ?? ''
			article_image = masto_data?.article_image ?? ''
			
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
			console.log(err)
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

	// Check if it is rss/atom, or other
	} else if (url.includes('.rss') || url.includes('.atom') || url.includes('feed.') || url.includes('feeds.') || url.includes('.xml') || url.includes('/feed') || url.includes('/rss')) {
		try {
			const feed = htmlparser2.parseFeed(rawFeed, {
				xmlMode: true
			});
			article = feed;
			// Check if the id is a link (starts with "http://" or "https://")
			if (feed && feed.items && feed.items[item]) {
					article_url = feed.items[item].link || "no article url, what the fuck dude";
			} else {
					article_url = "no article url, what the fuck dude";
			}

			article_title = removeHTMLTags(feed?.items[item].title);
			article_body = removeHTMLTags(decode(feed?.items[item].description));
			article_image = feed?.items[item]?.media[item];
			article_logo = null
			article_publisher = removeHTMLTags(feed?.title)
			article_publisher_url = getBaseUrl(article_url);
			article_published_date = feed?.items[item].pubDate;
			

			const proxied_article_url = proxyUrl + '/' + article_url;

			if (typeof article_image === 'object') {
				const mediaContentRegex = /<media:content[^>]*url=["']([^"']+)["'][^>]*\/?>/i;
				const mediaContentMatch = rawFeed.match(mediaContentRegex);

				if (mediaContentMatch) {
					article_image = mediaContentMatch[1];
				}
			}
			if ((!article_image || typeof article_image !== 'string' || article_image === '') && !article_publisher.includes('NYT')) {
				var metadata: any = await urlMetadata(proxied_article_url, {
					requestHeaders: {
						'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36',
						'Origin': 'http://duckduckgo.com',
						'Referer': proxied_article_url
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
			const proxied_article_url = proxyUrl + '/' + article_url;
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