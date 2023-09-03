/*****************************
Waffle Cone
description: Containing and shaping chocolate sauce.
dev owner: Dan Bush
tags: filter dedupe
*****************************/

// imports
import { hashtagBuildTheList } from './hashtag_buildthelist'
import { listVideos } from './list_videos'
import { listMastodon } from './list_mastodon'
import { getRandomNumbersInRange } from './sprinkle_getRandomNumbersInRange'

// set some defaults
const hashtagList = hashtagBuildTheList();
var article_source_quantity: number = hashtagList ? hashtagList.length : 0;

const videoList = listVideos();
var video_source_quantity: number = videoList ? videoList.length : 0;

const mastodonList = listMastodon();
var mastodon_source_quantity: number = mastodonList ? mastodonList.length : 0;

let used_article_set: Set<number> = new Set();
let used_video_set: Set<number> = new Set();
let used_social_set: Set<number> = new Set();

export enum ContentSource {
	Articles,
	Videos,
	Social,
}
enum ContentSourceQuantity {
	Articles = article_source_quantity,
	Videos = video_source_quantity,
	Social = mastodon_source_quantity,
}


// todo: interface for articles, interface for sources

export function waffleCone(source: ContentSource, count: number = 24) {
	
	let source_numbers: number[];
	
	// Use a switch statement to handle different sources
	switch (source) {
			case ContentSource.Articles:
				source_numbers = getRandomNumbersInRange(count, 0, ContentSourceQuantity.Articles - 1)  as number[];
				used_article_set = new Set([...Array.from(used_article_set), ...(source_numbers as number[])]);

				source_numbers.forEach((num) => {
					if (num >= 0 && num < ContentSourceQuantity.Articles) {
						article_source_quantity--;
					}
				});
				return source_numbers;

			case ContentSource.Videos:
					source_numbers = getRandomNumbersInRange(count, 0, ContentSourceQuantity.Videos - 1) as number[];
					used_video_set = new Set([...Array.from(used_video_set), ...(source_numbers as number[])]);
					
					source_numbers.forEach((num) => {
						if (num >= 0 && num < ContentSourceQuantity.Videos) {
							video_source_quantity--;
						}
					});
					return source_numbers;
	
			case ContentSource.Social:
					source_numbers = getRandomNumbersInRange(count, 0, ContentSourceQuantity.Social - 1) as number[];
					used_social_set = new Set([...Array.from(used_social_set), ...(source_numbers as number[])]);
					
					source_numbers.forEach((num) => {
						if (num >= 0 && num < ContentSourceQuantity.Social) {
							mastodon_source_quantity--;
						}
					});
					return source_numbers;

			default:
					throw new Error('Invalid content source');
	}
}