export async function getPipedEmbed(originalUrl) {
	// Extract video ID from the original URL using regex
	const regex = /watch\?v=(\w+)/;
	const matches = originalUrl.match(regex);
	
	if (matches && matches[1]) {
		const videoId = matches[1];
		const embeddedUrl = `https://piped.video/embed/${videoId}`;
		return embeddedUrl;
	} else {
		// If the original URL format doesn't match the expected pattern
		console.log("Invalid URL format.");
		return null;
	}
}