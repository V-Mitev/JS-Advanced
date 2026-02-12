function addItem() {
    const menu = document.getElementById('menu');
    const itemText = document.getElementById('newItemText');
    const itemValue = document.getElementById('newItemValue');

    const option = document.createElement('option');
    option.value = itemValue.value;
    option.textContent = itemText.value;

    menu.appendChild(option);

    itemText.value = '';
    itemValue.value = '';
}