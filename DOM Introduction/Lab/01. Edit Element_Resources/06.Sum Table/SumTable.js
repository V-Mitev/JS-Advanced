function sumTable() {
    let result = 0;
    const elements = document.getElementsByTagName('td');

    for (const element of elements) {
        const value = element.textContent;

        if (!isNaN(value)) {
            result += Number(value);
        }
    }

    document.getElementById('sum').textContent = result;
}