export function listMastodon(item: number = 999) {
	var theList: Array<string> = [
		'https://mastodon.social/@MissingThePt.rss',
		'https://mastodon.social/@Popehat.rss',
		'https://botsin.space/@kottke.rss',
		'https://mastodon.social/@scalzi.rss',
		'https://tapbots.social/@paul.rss',
		'https://mastodon.social/@dcseifert.rss',
		
		
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