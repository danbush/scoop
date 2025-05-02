export function listMastodon(item: number = 999) {
	var theList: Array<string> = [
		'https://mastodon.social/@MissingThePt.rss',
		'https://bsky.app/profile/did:plc:s6j27rxb3ic2rxw73ixgqv2p/rss',
		'https://mastodon.social/@kottke.rss',
		'https://mastodon.social/@scalzi.rss',
		'https://tapbots.social/@paul.rss',
		'https://mastodon.social/@dcseifert.rss',
		'https://idiots.chat/@hippo_bot.rss',
		'https://front-end.social/@chriscoyier.rss'
		
		
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