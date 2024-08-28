function solve(array) {
	let result = [];
	let currBiggest = array[0];

	array.reduce((a, x) => {
		if (x >= currBiggest) {
			currBiggest = x;
			a.push(x);
		}

		return a;
	}, result);

	return result;
}

solve([1, 3, 8, 4, 10, 12, 3, 2, 24]);
