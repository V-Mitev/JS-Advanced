function colorize() {
    const arr = document.getElementsByTagName('tr');

    for (let i = 1; i < arr.length; i += 2) {
        arr[i].style.backgroundColor = 'Teal';
    }
}