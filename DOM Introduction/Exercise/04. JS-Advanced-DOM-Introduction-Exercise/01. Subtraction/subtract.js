function subtract() {
    let firstNum = Number(document.getElementById('firstNumber').value);
    let secondNumb = Number(document.getElementById('secondNumber').value);

    document.getElementById('result').textContent = firstNum - secondNumb;
}