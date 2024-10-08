function cityTaxes(city, population, treasury) {
	return {
		name: city,
		population,
		treasury,
		taxRate: 10,
		collectTaxes() {
			this.treasury += this.population * this.taxRate;
		},
		applyGrowth(percentage) {
			this.population += (this.population * percentage) / 100;
		},
		applyRecession(percentage) {
			this.treasury -= (this.treasury * percentage) / 100;
		},
	};
}

const city = cityTaxes('Tortuga', 7000, 15000);
console.log(city);
