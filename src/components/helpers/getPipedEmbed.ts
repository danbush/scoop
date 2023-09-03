export async function getPipedEmbed(originalUrl: string) {
	// Extract video ID from the original URL using regex
	const regex = /watch\?v=([^&]+)/;
	const matches = originalUrl.match(regex);
	console.log('sven! originalUrl: ' + originalUrl)
	if (matches && matches[1]) {
		const videoId = matches[1];
		const embeddedUrl = `https://piped.scoopy.zone/embed/${videoId}`;
		return embeddedUrl;
	} else {
		// If the original URL format doesn't match the expected pattern
		console.log("Invalid URL format.");
		return null;
	}
}