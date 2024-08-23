function solve(fruit, weightInGrams, pricePerKilo) {

	let weightInKilo = weightInGrams / 1000;
	let neededMoney = weightInKilo * pricePerKilo;

	console.log(`I need $${neededMoney.toFixed(2)} to buy ${weightInKilo.toFixed(2)} kilograms ${fruit}.`);
}

solve("orange", 2500, 1.8);