// 01. Fruit
function calcPrice(fruitType, weightInGrams, pricePerKG) {
    const weightInKG = weightInGrams / 1000;
    const price = pricePerKG * weightInKG;

    console.log(`I need $${price.toFixed(2)} to buy ${weightInKG.toFixed(2)} kilograms ${fruitType}.`);
}

// calcPrice('orange', 2500, 1.80);
// calcPrice('apple', 1563, 2.35);

// 02. Greatest Common Divisor – GCD

function GCD(num1, num2) {
    while (num2 !== 0) {
        let remainder = num1 % num2;
        num1 = num2;
        num2 = remainder;
    }

    console.log(num1);
}

// GCD(15, 5);
// GCD(2154, 458);

// 03. Same Numbers

function sameNumbers(params) {
    const numAsString = params.toString();
    const num = Number(numAsString[0]);

    let isNumbersAreSame = true;
    let sumOfAllNumbers = num;

    for (let i = 1; i < numAsString.length; i++) {
        const currNum = Number(numAsString[i]);

        if (num !== currNum && isNumbersAreSame)
            isNumbersAreSame = false;

        sumOfAllNumbers += currNum;
    }

    console.log(isNumbersAreSame);
    console.log(sumOfAllNumbers);
}

// sameNumbers(2222222);
// sameNumbers(1234);

// 04. Previous Day

function prevDay(year, month, day) {
    const date = new Date(year, month - 1, day);
    date.setDate(date.getDate() - 1);

    const prevYear = date.getFullYear();
    const prevMonth = date.getMonth() + 1;
    const prevDay = date.getDate();

    console.log(`${prevYear}-${prevMonth}-${prevDay}`);
}

// prevDay(2016, 9, 30);
// prevDay(2015, 5, 10);

// 05. Time to Walk

function timeToWalk(steps, footPrintLength, speed) {
    const distanceMeters = steps * footPrintLength;
    const speedMetersPerSec = speed * 1000 / 3600;

    let timeSeconds = distanceMeters / speedMetersPerSec;

    const restTime = Math.floor(distanceMeters / 500) * 60;
    timeSeconds += restTime;

    const hours = Math.floor(timeSeconds / 3600);
    const minutes = Math.floor((timeSeconds % 3600) / 60);
    const seconds = Math.round(timeSeconds % 60);

    const h = String(hours).padStart(2, '0');
    const m = String(minutes).padStart(2, '0');
    const s = String(seconds).padStart(2, '0');

    console.log(`${h}:${m}:${s}`);
}

// timeToWalk(4000, 0.60, 5);
// timeToWalk(2564, 0.70, 5.5);

// 06. Road Radar

function roadRadar(speed, area) {
    let limit = 0;
    let speeding = 0;

    switch (area) {
        case 'motorway':
            limit = 130;
            speeding = speed - limit;
            break;
        case 'interstate':
            limit = 90;
            speeding = speed - limit;
            break;
        case 'city':
            limit = 50;
            speeding = speed - limit;
            break;
        case 'residential':
            limit = 20;
            speeding = speed - limit;
            break;
    }

    if (speeding <= 0) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
        return;
    }

    let status = '';

    if (speeding <= 20) {
        status = 'speeding';
    } else if (speeding <= 40) {
        status = 'excessive speeding';
    } else {
        status = 'reckless driving'
    }

    console.log(`The speed is ${speeding} km/h faster than the allowed speed of ${limit} - ${status}`);
}

// roadRadar(40, 'city');
// roadRadar(21, 'residential');
// roadRadar(120, 'interstate');
// roadRadar(200, 'motorway');

// 07. Cooking by Numbers

function cookingByNumbers(numAsStr, opr1, opr2, opr3, opr4, opr5) {
    let operations = [opr1, opr2, opr3, opr4, opr5];
    let number = Number(numAsStr);

    for (const operation of operations) {
        switch (operation) {
            case 'chop':
                number /= 2;
                break;
            case 'dice':
                number = Math.sqrt(number);
                break;
            case 'spice':
                number++;
                break;
            case 'bake':
                number *= 3;
                break;
            case 'fillet':
                number -= number * 0.2;
                break;
        }

        console.log(number);
    }

}

// cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
// cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
