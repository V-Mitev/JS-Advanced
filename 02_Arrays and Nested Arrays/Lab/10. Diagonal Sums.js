function solve(input) {
	let mainDiagonalSum = 0;
	let secondaryDiagonalSum = 0;

	for (let i = 0; i < input.length; i++) {
		let array = input[i];

		let mainDiagonal = input[i][i];
		let secondatyDiagonal = input[i][array.length - i - 1];

		mainDiagonalSum += mainDiagonal;
		secondaryDiagonalSum += secondatyDiagonal;
	}

	console.log(`${mainDiagonalSum} ${secondaryDiagonalSum}`);
}

solve([
	[3, 5, 17],
	[-1, 7, 14],
	[1, -8, 89],
]);
