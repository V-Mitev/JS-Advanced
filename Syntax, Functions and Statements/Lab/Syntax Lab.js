// 01. Echo Function
function echo(input) {
    console.log(input.length);
    console.log(input);
}

//echo('Hello');

// 02. String Length

function strLength(str1, str2, str3) {
    const allStrsLength = str1.length + str2.length + str3.length;
    const avgStrLength = allStrsLength / 3;

    console.log(allStrsLength);
    console.log(Math.floor(avgStrLength));
}

// strLength('chocolate', 'ice cream', 'cake');
// strLength('pasta', '5', '22.3');

// 03. Largest Number

function largestNumber(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        console.log(`The largest number is ${num1}.`);
    } else if (num2 > num1 && num2 > num3) {
        console.log(`The largest number is ${num2}.`);
    } else {
        console.log(`The largest number is ${num3}.`);
    }
}

// largestNumber(5, -3, 16);
// largestNumber(-3, -5, -22.5);

// 04. Circle Area

function circleArea(input) {
    const inputType = typeof input;

    if (inputType === 'number') {
        const result = Math.pow(input, 2) * Math.PI;
        console.log(result.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);
    }
}

// circleArea(5);
// circleArea('name');

// 05. Math Operations

function mathOperations(num1, num2, operator) {
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2
            break;
        case '-':
            result = num1 - num2
            break;
        case '/':
            result = num1 / num2
            break;
        case '*':
            result = num1 * num2
            break;
        case '%':
            result = num1 % num2
            break;
        case '**':
            result = num1 ** num2
            break;
        default:
            console.log('Error');
            break;
    }

    console.log(result);
}

// mathOperations(5, 6, '+');
// mathOperations(3, 5.5, '*');

// 06. Sum of Numbers N…M

function sumOfNums(strNum1, strNum2) {
    const num1 = Number(strNum1);
    const num2 = Number(strNum2);

    let result = 0;
    for (let i = num1; i <= num2; i++) {
        result += i;
    }

    return result;
}

// console.log(sumOfNums('1', '5'));
// console.log(sumOfNums('-8', '20'));

// 07. Day of Week

function dayOfWeek(day) {
    switch (day) {
        case 'Monday':
            console.log(1);
            break;
        case 'Tuesday':
            console.log(2);
            break;
        case 'Wednesday':
            console.log(3);
            break;
        case 'Thursday':
            console.log(4);
            break;
        case 'Friday':
            console.log(5);
            break;
        case 'Saturday':
            console.log(6);
            break;
        case 'Sunday':
            console.log(7);
            break;

        default:
            console.log('error');
            break;
    }
}

// dayOfWeek('Monday');
// dayOfWeek('Friday');
// dayOfWeek('Invalid');

// 08. Days in a month
function daysInMonth(month, year) {
    console.log(new Date(year, month, 0).getDate());
}

// daysInMonth(1, 2012);
// daysInMonth(2, 2021);

// 09. Square of Stars
function squareStars(input) {
    if (input == undefined) {
        input = 5;
    }

    let stringToRepeat = '* ';

    for (let i = 0; i < input; i++) {
        console.log(stringToRepeat.repeat(input));
    }
}

// squareStars(2);
// squareStars(5);
// squareStars();

// 10. Aggregate Elements
function aggElements(elements) {
    let sumOfAllElelemnts = 0;
    let concatNums = '';
    let inverseSum = 0.0;

    for (const num of elements) {
        sumOfAllElelemnts += num;
        concatNums += num;
        inverseSum += 1 / num;
    }

    console.log(sumOfAllElelemnts);
    console.log(inverseSum);
    console.log(concatNums);
}

// aggElements([1, 2, 3]);
// aggElements([2, 4, 8, 16]);