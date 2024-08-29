function solve(input) {
	let towns = {};

	for (const townEl of input) {
		let [town, population] = townEl.split(' <-> ');

		if (towns[town]) {
			towns[town] += Number(population);
		} else {
			towns[town] = Number(population);
		}
	}

	for (const key in towns) {
		console.log(`${key} : ${towns[key]}`);
	}
}

solve([
	'Istanbul <-> 100000',
	'Istanbul <-> 1000',
	'Honk Kong <-> 2100004',
	'Jerusalem <-> 2352344',
	'Mexico City <-> 23401925',
]);
