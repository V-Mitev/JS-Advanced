function search() {
   let matches = 0;
   const result = document.getElementById('result');
   const towns = document.querySelectorAll('#towns>li');
   const search = document.getElementById('searchText').value.toLowerCase();

   for (const town of towns) {
      town.style.fontWeight = '';
      town.style.textDecoration = 'none';

      if (search !== '' && town.textContent.toLowerCase().includes(search)) {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         matches++;
      }
   }

   result.textContent = `${matches} matches found`;
}