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
		} catch (err) {
			console.log(err);
		}
	}

	console.log(articleArray.value);
	
	return articleArray.value;
}
