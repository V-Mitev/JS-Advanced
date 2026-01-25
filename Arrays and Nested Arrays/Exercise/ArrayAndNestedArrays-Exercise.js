// 01. Print an Array with a Given Delimiter

function print(input, delimeter) {
    return input.join(delimeter);
}

// console.log(print(['One',
//     'Two',
//     'Three',
//     'Four',
//     'Five'],
//     '-'));
// console.log(print(['How about no?',
//     'I',
//     'will',
//     'not',
//     'do',
//     'it!'],
//     '_'));

// 02. Print every N-th Element from an Array

function printEveryNthElement(input, n) {
    let step = 1;
    let result = [input[0]];

    for (let i = 1; i < input.length; i++) {
        if (step == n) {
            result.push(input[i]);
            step = 1;
        } else {
            step++;
        }
    }

    return result;
}

// console.log(printEveryNthElement(['5',
//     '20',
//     '31',
//     '4',
//     '20'],
//     2));

// console.log(printEveryNthElement(['dsa',
//     'asd',
//     'test',
//     'tset'],
//     2));

// console.log(printEveryNthElement(['1',
//     '2',
//     '3',
//     '4',
//     '5'],
//     6));

// 03. Add and Remove Elements

function addAndRemoveElements(input) {
    let number = 1;
    let result = new Array();

    for (const command of input) {
        if (command === 'add') {
            result.push(number);
        } else {
            result.pop();
        }

        number++;
    }

    if (result.length === 0) {
        return 'Empty';
    } else {
        return result.join('\n');
    }
}

// console.log(addAndRemoveElements(['add', 'add', 'add', 'add']));
// console.log(addAndRemoveElements(['add', 'add', 'remove', 'add', 'add']));
// console.log(addAndRemoveElements(['remove', 'remove', 'remove']));

// 04. Rotate Array

function rotateArr(input, rotatations) {
    for (let i = 1; i <= rotatations; i++) {
        input.unshift(input.pop());
    }

    return input.join(' ');
}

// console.log(rotateArr(['1', '2', '3', '4'], 2));
// console.log(rotateArr(['Banana', 'Orange', 'Coconut', 'Apple'], 15));

// 05. Extract Increasing Subsequence from Array

function extractIncrsSubseq(input) {
    let currBiggestNum = input[0];
    let result = [currBiggestNum];

    for (let i = 1; i < input.length; i++) {
        if (input[i] >= currBiggestNum) {
            currBiggestNum = input[i];

            result.push(currBiggestNum);
        }
    }

    return result;
}

// console.log(extractIncrsSubseq([1, 3, 8, 4, 10, 12, 3, 2, 24]));
// console.log(extractIncrsSubseq([1, 2, 3, 4]));
// console.log(extractIncrsSubseq([20, 3, 2, 15, 6, 1]));

// 06. List Of Names

function listOfNames(input) {
    input.sort((a, b) => a.localeCompare(b));

    for (let i = 0; i < input.length; i++) {
        console.log(`${i + 1}.${input[i]}`);
    }
}

// listOfNames(["John", "Bob", "Christina", "Ema"]);

// 07. Sorting Numbers

function sortingNumbers(input) {
    let result = [];
    input.sort((a, b) => a - b);

    while (input.length > 0) {
        let smallestNum = input.shift();
        let biggestNum = input.pop();

        result.push(smallestNum);
        result.push(biggestNum);
    }

    return result;
}

// console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
// console.log(sortingNumbers([22, 9, 63, 3, 2, 19, 54, 11, 21, 18]));

// 08. Sort an Array by 2 Criteria

function sortBy2Criteria(input) {
    input.sort((a, b) => {
        if (a.length !== b.length) {
            return a.length - b.length;
        }

        return a.localeCompare(b, undefined, { sensitivity: 'base' });
    });

    return input.join('\n');
}

// console.log(sortBy2Criteria(['alpha', 'beta', 'gamma']));
// console.log(sortBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']));
// console.log(sortBy2Criteria(['test', 'Deny', 'omen', 'Default']));

// 09. Magic Matrices

function magicMatrices(matrix) {
    let isMagical = true;
    let checkingSum = matrix[0].reduce((a, x) => a + x, 0);

    for (let i = 0; i < matrix.length; i++) {
        let rowSum = matrix[i].reduce((a, x) => a + x, 0);
        let colSum = 0;

        for (let j = 0; j < matrix.length; j++) {
            colSum += matrix[j][i];
        }

        if (rowSum !== checkingSum || colSum !== checkingSum) {
            isMagical = false;
            break;
        }
    }

    console.log(isMagical);
}

magicMatrices([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]);

magicMatrices([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]]);

magicMatrices([[1, 0, 0],
[0, 0, 1],
[0, 1, 0]]);