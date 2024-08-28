function solve(array) {
	array = array.sort((a, b) => a.length - b.length || a.localeCompare(b));

	console.log(array);
}

solve(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
