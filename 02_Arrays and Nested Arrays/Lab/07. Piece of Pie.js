function solve(pieFlavors, firstFlavour, secondFlavour) {
	let startIdx = pieFlavors.indexOf(firstFlavour);
	let endIdx = pieFlavors.indexOf(secondFlavour);

	let result = pieFlavors.slice(startIdx, endIdx + 1);

	return result;
}

solve(
	[
		"Pumpkin Pie",
		"Key Lime Pie",
		"Cherry Pie",
		"Lemon Meringue Pie",
		"Sugar Cream Pie",
	],
	"Key Lime Pie",
	"Lemon Meringue Pie"
);
