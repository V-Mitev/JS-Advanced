function solve(input) {
	let biggestNum = Number.NEGATIVE_INFINITY;

	for (let i = 0; i < input.length; i++) {
		let array = input[i];

		for (let j = 0; j < array.length; j++) {
			if (array[j] >= biggestNum) {
				biggestNum = array[j];
			}
		}
	}

    return biggestNum;
}

solve([
	[20, 50, 10],
	[8, 33, 145],
]);
