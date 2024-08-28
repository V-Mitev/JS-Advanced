function solve(array) {
	array = array.sort((a, b) => a.localeCompare(b));

	let counter = 1;
	for (let i = 0; i < array.length; i++) {
		console.log(`${counter}.${array[i]}`);

		counter++;
	}
}

solve(['John', 'Bob', 'Christina', 'Ema']);
