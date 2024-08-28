function solve(array) {
	console.log(array.sort((a, b) => a.length - b.length || a.localeCompare(b)));
}

solve(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
