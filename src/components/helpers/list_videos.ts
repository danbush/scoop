export function listVideos(item: number) {
	var theList: Array<string> = [
		'https://pipedapi.scoopy.zone/feed/unauthenticated/rss?channels=UCBJycsmduvYEL83R_U4JriQ',
		'https://pipedapi.scoopy.zone/feed/unauthenticated/rss?channels=UC9Kq-yEt1iYsbUzNOoIRK0g',
		'https://pipedapi.scoopy.zone/feed/unauthenticated/rss?channels=UCyXiDU5qjfOPxgOPeFWGwKw',
		'https://pipedapi.scoopy.zone/feed/unauthenticated/rss?channels=UC9PBzalIcEQCsiIkq36PyUA'
		
	]
	return theList[item]
}