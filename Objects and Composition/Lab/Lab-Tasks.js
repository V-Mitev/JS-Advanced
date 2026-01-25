// 01. City Record

function cityRecord(townName, population, treasury) {
    return {
        name: townName,
        population,
        treasury
    }
}

// console.log(cityRecord('Tortuga', 7000, 15000));
// console.log(cityRecord('Santo Domingo', 12000, 23500));

// 02. Town Population

function townPopulation(input) {
    const result = {};

    for (const line of input) {
        let [town, population] = line.split(' <-> ');
        population = Number(population);

        if (!result[town]) {
            result[town] = population;
        } else {
            result[town] += population;
        }
    }

    return Object.entries(result)
        .map(([town, population]) => `${town} : ${population}`)
        .join('\n');
}

// console.log(townPopulation(['Sofia <-> 1200000',
//     'Montana <-> 20000',
//     'New York <-> 10000000',
//     'Washington <-> 2345000',
//     'Las Vegas <-> 1000000']));

// console.log(townPopulation(['Istanbul <-> 100000',
//     'Honk Kong <-> 2100004',
//     'Jerusalem <-> 2352344',
//     'Mexico City <-> 23401925',
//     'Istanbul <-> 1000']));

// 03. City Taxes

function cityTaxes(townName, population, treasury) {
    return {
        name: townName,
        population,
        treasury,
        taxRate: 10,

        collectTaxes() {
            this.treasury += Math.floor(this.population * this.taxRate);
        },

        applyGrowth(percentage) {
            this.population += Math.floor(this.population * percentage / 100);
        },

        applyRecession(percentage) {
            this.treasury -= Math.floor(this.treasury * percentage / 100);
        }
    };
}

// const city = cityTaxes('Tortuga', 7000, 15000);

// city.collectTaxes();
// console.log(city.treasury);
// city.applyGrowth(5);
// console.log(city.population);

// 04. Object Factory

function factory(library, orders) {
    let products = [];

    for (const order of orders) {
        let product = order.template;
        for (const part of order.parts) {
            product[part] = library[part];
        }

        products.push(product);
    }

    return products;
}

const library = {
    print: function () {
        console.log(`${this.name} is printing a page`);
    },
    scan: function () {
        console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
        console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
};

const orders = [
    {
        template: { name: 'ACME Printer' },
        parts: ['print']
    },
    {
        template: { name: 'Initech Scanner' },
        parts: ['scan']
    },
    {
        template: { name: 'ComTron Copier' },
        parts: ['scan', 'print']
    },
    {
        template: { name: 'BoomBox Stereo' },
        parts: ['play']
    }
];

const products = factory(library, orders);
console.log(products);

// 05.Assembly Line

function createAssemblyLine() {
    return {
        hasClima(car) {
            car.temp = 21;
            car.tempSettings = 21;
            car.adjustTemp = () => {
                if (car.temp < car.tempSettings) {
                    car.temp++;
                } else if (car.temp > car.tempSettings) {
                    car.temp--;
                }
            };
        },

        hasAudio(car) {
            car.currentTrack = { name: null, artist: null };
            car.nowPlaying = () => {
                if (car.currentTrack) {
                    console.log(`Now playing '${car.currentTrack.name}' by ${car.currentTrack.artist}`);
                }
            };
        },

        hasParktronic(car) {
            car.checkDistance = (distance) => {
                if (0.5 > distance && distance >= 0.25) {
                    console.log('Beep!');
                } else if (0.25 > distance && distance >= 0.1) {
                    console.log('Beep! Beep!');
                } else if (0.1 > distance) {
                    console.log('Beep! Beep! Beep!');
                }
            };
        }

    };
}

const assemblyLine = createAssemblyLine();

const myCar = {
    make: 'Toyota',
    model: 'Avensis'
};

assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);

assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Never Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();

assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);

console.log(myCar);