import { FastAverageColor } from 'fast-average-color';

export async function averageColor(image: string, data: string = 'hex') {
	const fastAverageColor = new FastAverageColor();
	try {
		const color = await fastAverageColor.getColorAsync(image);
		return color[data];
	} catch (e) {
		console.log(e);
		return null;
	}
}