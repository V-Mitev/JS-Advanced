function solve(input) {
    let resultArray = '';

    for (let i = 0; i < input.length; i++) {
        if (i % 2 == 0) {
            resultArray += `${input[i]} `;
        }
    }

    console.log(resultArray);
}

solve(['20', '30', '40', '50', '60']);