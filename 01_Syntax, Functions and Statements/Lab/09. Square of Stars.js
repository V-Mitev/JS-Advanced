function solve(input) {
	if (input == undefined) {
		input = 5;
	}

	let stringToRepeat = '* ';

	for (let i = 0; i < input; i++) {
		console.log((stringToRepeat.repeat(input)));
	}
}

solve();
