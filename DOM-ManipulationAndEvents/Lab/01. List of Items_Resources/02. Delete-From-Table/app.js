function deleteByEmail() {
    const input = document.querySelector('input[name="email"]');
    
    const rows = Array.from(document.querySelectorAll('tbody tr'));

    const rowsToDelete = rows.filter(row => row.children[1].textContent === input.value);

    if (rowsToDelete.length > 0) {
        rowsToDelete.forEach(row => row.remove());
        document.getElementById('result').textContent = 'Deleted.';
    } else {
        document.getElementById('result').textContent = 'Not found.';
    }

    input.value = '';
}