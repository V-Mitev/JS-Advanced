function solve(year, month, day) {
    let date = new Date(`${year}-${month}-${day}`);
    let yesterday = new Date(date.setDate(date.getDate() - 1));

    console.log(`${yesterday.getFullYear()}-${yesterday.getMonth() + 1}-${yesterday.getDate()}`);
}

solve(2015, 5, 10);