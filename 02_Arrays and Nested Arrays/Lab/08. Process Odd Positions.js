function solve(input) {
	let result = '';

	input = input.reverse();

	for (let i = 0; i < input.length; i++) {
		if (i % 2 != 0) {
			result += `${input[i] * 2} `;
		}
	}

	console.log(result);
}

solve([10, 15, 20, 25]);
