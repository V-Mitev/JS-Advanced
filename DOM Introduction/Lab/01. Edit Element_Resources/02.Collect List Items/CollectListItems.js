function extractText() {
    const result = document.getElementById('result');
    const listItems = Array.from(document.getElementsByTagName('li'));

    let listValues = [];
    for (const list of listItems) {
        listValues.push(list.textContent);
    }

    result.textContent = listValues.join('\n');
}

function extractText() {
    const result = document.getElementById('result');
    const listItems = Array.from(document.getElementsByTagName('li'));

    result.textContent = listItems.map(item => item.textContent).join('\n');
}