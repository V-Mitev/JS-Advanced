function solve(input) {
	input = input.sort((a, b) => a - b);

	let start = input.length / 2;

	return input.slice(start, input.length);
}

solve([3, 19, 14, 7, 2, 19, 6]);
