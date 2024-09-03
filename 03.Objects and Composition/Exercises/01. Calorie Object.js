function solve(input) {
  let result = {};

  for (let i = 0; i < input.length; i += 2) {
    const food = input[i];
    const calories = Number(input[i + 1]);

    result[food] = calories;
  }

  console.log(result);
}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
