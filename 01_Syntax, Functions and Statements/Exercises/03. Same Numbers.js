function solve(input) {
	let inputAsString = input.toString();
	let inputAsArray = inputAsString.split("");

	let sumOfAllDigits = 0;
	let isAllDigitsEqual = true;
    let firstDigit = Number(inputAsArray[0]);

	for (const digit of inputAsArray) {
		let number = Number(digit);

		if (number !== firstDigit) {
			isAllDigitsEqual = false;
		}

		sumOfAllDigits += number;
	}

	console.log(isAllDigitsEqual);
	console.log(sumOfAllDigits);
}

solve(1234);
