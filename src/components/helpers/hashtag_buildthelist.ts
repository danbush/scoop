export function hashtagBuildTheList(item: number = 999) {
	var theList: Array<string> = [
		'https://feeds.arstechnica.com/arstechnica/index',
		'https://techcrunch.com/feed/',
		'https://news.ycombinator.com/rss',
		'https://www.theverge.com/rss/index.xml',
		'https://www.polygon.com/rss/index.xml',
		'http://feeds.feedburner.com/ign/news',
		'https://www.pocketgamer.com/index.rss',
		'https://deadline.com/feed/',
		'https://tvline.com/feed/',
		'https://www.slashfilm.com/feed/',
		'https://pitchfork.com/feed/feed-news/rss',
		'https://consequence.net/feed/',
		'https://www.rollingstone.com/feed/',
		'https://feeds.washingtonpost.com/rss/national?itid=lk_inline_manual_32',
		'https://www.axios.com/feeds/feed.rss',
		'https://www.economist.com/united-states/rss.xml',
		'https://stratechery.com/feed/',
		'https://www.gamespot.com/feeds/reviews',
		'https://www.joblo.com/feed/',
		'https://sgfcitizen.org/feed/',
		'https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml',
		'https://www.inverse.com/rss',
		'https://www.space.com/feeds/all',
		'https://feeds.npr.org/1001/rss.xml',
		'https://www.404media.co/rss/',
		'https://futurecrunch.com/rss/',
		'https://www.thewrap.com/feed/',
		'https://www.techmeme.com/feed.xml',
		'https://www.mediagazer.com/feed.xml',
		'https://www.livescience.com/feeds/all',
		'https://editorial.rottentomatoes.com/feed/',
		'https://aftermath.site/rss',
		'https://www.theautopian.com/feed/',
		'https://www.wired.com/rss/',
		'https://futurism.com/feed'
	];
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