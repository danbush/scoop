import { ref } from 'vue'
import { chocolateSauce } from './chocolate_sauce'
import { hashtagBuildTheList } from './hashtag_buildthelist'

export async function singleSourceGrabber(source: number, count: number = 1, starter: number = 0) {
	// Define a reactive object to store the article data
	const articleArray = ref<any>({});

	// Loop 'count' times to fetch article data asynchronously
	for (let i = 0; i < count; i++) {
		const articleNumber = starter + i;
		try {
			// Fetch article data and store it in articleArray using the articleNumber as the key
			const result = await chocolateSauce(hashtagBuildTheList(source), articleNumber);
			articleArray.value[articleNumber] = result;
			if (!articleArray.value[articleNumber].article_image || typeof articleArray.value[articleNumber].article_image === 'object') {
				articleArray.value[articleNumber].article_image = articleArray.value[articleNumber].article.items[articleNumber].media[0].url;
			}
			articleArray.value[articleNumber].article_logo = articleArray.value[0].article_logo
		} catch (err) {
			console.log(err);
		}
	}

	console.log(articleArray.value);
	
	return articleArray.value;
}