export function getRandomNumbersInRange(count:number, min:number, max:number) {
	const numbers = new Set();
	while (numbers.size < count) {
		const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
		numbers.add(randomNumber);
	}
	return Array.from(numbers);
}