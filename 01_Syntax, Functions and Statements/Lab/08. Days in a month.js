function solve(month, year) {
    let daysInMonth = new Date(year, month, 0).getDate();

    console.log(daysInMonth);
}

solve(1, 2012);