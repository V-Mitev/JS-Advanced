function solve(input) {
    let inutType = typeof(input);

    if (inutType === 'number') {
        console.log((Math.pow(input, 2)* Math.PI).toFixed(2));
        
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${inutType}.`);
    }
}

solve('name');