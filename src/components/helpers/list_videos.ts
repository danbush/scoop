export function listVideos(item: number) {
	var theList: Array<string> = [
		'https://pipedapi.kavin.rocks/feed/unauthenticated/rss?channels=UCBJycsmduvYEL83R_U4JriQ',
		'https://pipedapi.kavin.rocks/feed/unauthenticated/rss?channels=UC9Kq-yEt1iYsbUzNOoIRK0g',
		'https://pipedapi.kavin.rocks/feed/unauthenticated/rss?channels=UCyXiDU5qjfOPxgOPeFWGwKw',
		
	]
	return theList[item]
}