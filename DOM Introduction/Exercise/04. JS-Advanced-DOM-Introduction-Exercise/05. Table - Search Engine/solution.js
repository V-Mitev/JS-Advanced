function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const input = document.getElementById('searchField');
      const search = input.value.toLowerCase();
      const rows = document.querySelectorAll('tbody > tr');

      for (const row of rows) {
         row.classList.remove('select');

         for (const cell of row.children) {
            if (search !== '' && cell.textContent.toLowerCase().includes(search)) {
               row.classList.add('select');
               break;
            }
         }
      }

      input.value = '';
   }
}