export function listVideos(item: number = 999) {
	var theList: Array<string> = [
		'https://pipedapi.scoopy.zone/feed/unauthenticated/rss?channels=UCBJycsmduvYEL83R_U4JriQ',
		'https://pipedapi.scoopy.zone/feed/unauthenticated/rss?channels=UC9Kq-yEt1iYsbUzNOoIRK0g',
		'https://pipedapi.scoopy.zone/feed/unauthenticated/rss?channels=UCyXiDU5qjfOPxgOPeFWGwKw',
		'https://pipedapi.scoopy.zone/feed/unauthenticated/rss?channels=UC9PBzalIcEQCsiIkq36PyUA',
		'https://pipedapi.scoopy.zone/feed/unauthenticated/rss?channels=UCeeFfhMcJa1kjtfZAGskOCA',
		'https://pipedapi.scoopy.zone/feed/unauthenticated/rss?channels=UC3KEoMzNz8eYnwBC34RaKCQ',
		'https://pipedapi.scoopy.zone/feed/unauthenticated/rss?channels=UCYs3kVmLLfbaRL6Af2ELMHg',
		'https://pipedapi.scoopy.zone/rss/playlists/PLAbMhAYRuCUhawCEV2oXZGrienoKTN16X',
		
		
	]
	// this is jank as HELL.
	if (item === 999) {
		return theList;
		} 
		else {
			if (item >= 0 && item < theList.length) {
				return theList[item];
			} 
		}
}