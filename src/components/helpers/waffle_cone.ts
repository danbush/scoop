/*****************************
Waffle Cone
description: Containing and shaping chocolate sauce.
dev owner: Dan Bush
tags: filter dedupe
*****************************/

// imports
import { chocolateSauce } from './chocolate_sauce'
import { hashtagBuildTheList } from './hashtag_buildthelist'
import { listVideos } from './list_videos'
import { listMastodon } from './list_mastodon'
import { getRandomNumbersInRange } from './sprinkle_getRandomNumbersInRange'

// set some defaults
var article_source_quantity: number = hashtagBuildTheList().length
var video_source_quantity: number = listVideos().length
var mastodon_source_quantity: number = listMastodon().length

const used_article_set: Set<number> = new Set();
const used_video_set: Set<number> = new Set();
const used_social_set: Set<number> = new Set();

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
				source_numbers = getRandomNumbersInRange(count, 0, ContentSourceQuantity.Articles - 1);
				used_article_set.add(...source_numbers);
				
				source_numbers.forEach((num) => {
					if (num >= 0 && num < ContentSourceQuantity.Articles) {
						article_source_quantity--;
					}
				});
				return source_numbers;
				break;
			case ContentSource.Videos:
					source_numbers = getRandomNumbersInRange(count, 0, ContentSourceQuantity.Videos - 1);
					used_video_set.add(...source_numbers);
					
					source_numbers.forEach((num) => {
						if (num >= 0 && num < ContentSourceQuantity.Videos) {
							video_source_quantity--;
						}
					});
					return source_numbers;
					break;
			case ContentSource.Social:
					source_numbers = getRandomNumbersInRange(count, 0, ContentSourceQuantity.Social - 1);
					used_social_set.add(...source_numbers);
					
					source_numbers.forEach((num) => {
						if (num >= 0 && num < ContentSourceQuantity.Social) {
							social_source_quantity--;
						}
					});
					return source_numbers;
					break;
			default:
					throw new Error('Invalid content source');
	}
}