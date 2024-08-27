function solve(n, k) {
	let result = [];
	let sum = 0;

	for (let i = 1; i <= n; i++) {
		if (result.length >= k) {
			sum = 0;

			for (let j = 0; j < k; j++) {
				const element = result[result.length - j - 1];

				sum += element;
			}
		} else if (result.length >= 2) {
			sum = 0;

			for (let j = 0; j < result.length; j++) {
				const element = result[j];

				sum += element;
			}
		} else {
			result.push(1);
			continue;
		}

		result.push(sum);
	}

	return result;
}

solve(6, 3);
