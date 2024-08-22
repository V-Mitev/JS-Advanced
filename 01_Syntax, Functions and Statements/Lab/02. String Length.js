function solve(firstArg, secondArg, thirdArg) {
    let firstArgLenght = firstArg.length;
    let secondArgLenght = secondArg.length;
    let thirdArgLenght = thirdArg.length;

    let sum = firstArgLenght + secondArgLenght + thirdArgLenght;
    let averageLength = Math.floor(sum / 3);

    console.log(sum);
    console.log(averageLength);
}

solve('chocolate', 'ice cream', 'cake');