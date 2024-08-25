function solve(input) {
	let result = [];

	for (const number of input) {
		if (number >= 0) {
			result.push(number);
		} else {
			result.unshift(number);
		}
	}

	for (const number of result) {
		console.log(number);
	}
}

solve([7, -2, 8, 9]);
