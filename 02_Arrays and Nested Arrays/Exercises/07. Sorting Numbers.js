function solve(numbers) {
	let result = [];
	numbers.sort((a, b) => a - b);

	while (numbers.length > 0) {
		let firstEl = numbers.shift();
		let secondEl = numbers.pop();

		result.push(firstEl);
		result.push(secondEl);
	}

	return result;
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
