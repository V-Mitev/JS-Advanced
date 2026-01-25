// 01. Even Position Elements

function eventPosition(input) {
    let result = [];

    for (let i = 0; i < input.length; i++) {
        if (i % 2 == 0) {
            result.push(input[i]);
        }
    }

    console.log(result.join(' '));
}

// eventPosition(['20', '30', '40', '50', '60']);
// eventPosition(['5', '10']);

// 02. Last K Numbers Sequence

function lastKElmenets(n, k) {
    const result = [];
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        if (result.length >= k) {
            sum = 0;

            for (let j = 0; j < k; j++) {
                sum += result[result.length - j - 1];
            }
        } else if (result.length >= 2) {
            sum = 0;

            for (let j = 0; j < result.length; j++) {
                sum += result[j];
            }
        } else {
            result.push(1);
            continue;
        }

        result.push(sum);
    }

    return result;
}

// console.log(lastKElmenets(6, 3));
// console.log(lastKElmenets(8, 2));

// 03. Sum First Last

function sumFirstLast(input) {
    const numArr = input.map(x => Number(x));

    return numArr.shift() + numArr.pop();
}

// console.log(sumFirstLast(['20', '30', '40']));
// console.log(sumFirstLast(['5', '10']));

// 04. Negative / Positive Numbers

function negativeAndPositiveNums(input) {
    const arr = [];

    for (const number of input) {
        if (number < 0) {
            arr.unshift(number);
        } else {
            arr.push(number);
        }
    }

    console.log(arr.join('\n'));
}

// negativeAndPositiveNums([7, -2, 8, 9]);
// negativeAndPositiveNums([3, -2, 0, -1]);


// 05. Smallest Two Numbers

function smallestTwoNums(input) {
    input = input.sort((a, b) => a - b);

    console.log(input[0], input[1]);
}

// smallestTwoNums([30, 15, 50, 5]);
// smallestTwoNums([3, 0, 10, 4, 7, 3]);

// 06. Bigger Half

function biggerHalf(input) {
    input = input.sort((a, b) => a - b);

    if (input.length % 2 == 0) {
        return input.splice(input.length / 2);
    } else {
        return input.splice(Math.floor(input.length / 2));
    }
}

// console.log(biggerHalf([4, 7, 2, 5]));
// console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));

// 07. Piece of Pie

function pieceOfPie(flavors, start, end) {
    let result = new Array();

    let startIndex = flavors.indexOf(start);
    let endIndex = flavors.indexOf(end);

    for (let i = startIndex; i <= endIndex; i++) {
        result.push(flavors[i]);
    }

    return result;
}

// console.log(pieceOfPie(['Pumpkin Pie',
//     'Key Lime Pie',
//     'Cherry Pie',
//     'Lemon Meringue Pie',
//     'Sugar Cream Pie'],
//     'Key Lime Pie',
//     'Lemon Meringue Pie'));

// console.log(pieceOfPie(['Apple Crisp',
//     'Mississippi Mud Pie',
//     'Pot Pie',
//     'Steak and Cheese Pie',
//     'Butter Chicken Pie',
//     'Smoked Fish Pie'],
//     'Pot Pie',
//     'Smoked Fish Pie'));

// 08. Process Odd Positions

function processOddPostions(input) {
    let result = new Array();

    for (let i = 0; i < input.length; i++) {
        if (i % 2 !== 0) {
            result.push(input[i] * 2);
        }
    }

    return result.reverse();
}

// console.log(processOddPostions([10, 15, 20, 25]));
// console.log(processOddPostions([3, 0, 10, 4, 7, 3]));

// 09. Biggest Element

function biggestNum(input) {
    let result = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[0].length; j++) {
            if (input[i][j] >= result) {
                result = input[i][j];
            }
        }
    }

    return result;
}

// console.log(biggestNum([[20, 50, 10],
// [8, 33, 145]]));

// console.log(biggestNum([[3, 5, 7, 12],
// [-1, 4, 33, 2],
// [8, 3, 0, 4]]));

// 10. Diagonal Sums

function diagonalSum(input) {
    let mainDiagonal = 0;
    let secondaryDiagonal = 0;

    for (let i = 0; i < input.length; i++) {
        let mainNum = input[i][i];
        let secondayNum = input[i][input.length - i - 1];

        mainDiagonal += mainNum;
        secondaryDiagonal += secondayNum;
    }

    console.log(mainDiagonal, secondaryDiagonal);
}

// diagonalSum([[20, 40],
// [10, 60]]);

// diagonalSum([[3, 5, 17],
// [-1, 7, 14],
// [1, -8, 89]]);

// 11. Equal Neighbors

function equalNeighbors(matrix) {
    let pairsCounter = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (i + 1 < matrix.length) {
                if (matrix[i][j] === matrix[i + 1][j]) {
                    pairsCounter++;
                }
            }

            if (j + 1 < matrix[i].length) {
                if (matrix[i][j] === matrix[i][j + 1]) {
                    pairsCounter++;
                }
            }
        }
    }

    return pairsCounter;
}