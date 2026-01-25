// 01. Calorie Object

function calorieObject(input) {
    let result = {};

    for (let i = 0; i < input.length; i += 2) {
        const food = input[i];
        const calories = Number(input[i + 1]);

        result[food] = calories;
    }

    return result;
}

console.log(calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));
console.log(calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']));