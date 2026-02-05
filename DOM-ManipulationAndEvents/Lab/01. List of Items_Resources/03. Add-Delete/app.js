function addItem() {
    const input = document.getElementById('newItemText');
    const items = document.getElementById('items');

    if(input.value !== '') {
        const item = document.createElement('li');
        item.textContent = input.value;
        
        const aTag = document.createElement('a');
        aTag.textContent = '[Delete]';
        aTag.href = '#';

        aTag.addEventListener('click', function(e) {
            e.target.parentElement.remove();
        });

        item.appendChild(aTag);
        items.appendChild(item);
        
        input.value = '';
    }
}