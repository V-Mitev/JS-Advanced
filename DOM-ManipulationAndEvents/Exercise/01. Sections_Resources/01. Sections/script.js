function create(words) {
   const content = document.getElementById('content');

   for (const word of words) {
      const divTag = document.createElement('div');

      const pTag = document.createElement('p');
      pTag.textContent = word;
      pTag.style.display = 'none';

      divTag.appendChild(pTag);
      content.appendChild(divTag);

      divTag.addEventListener('click', (e) => {
         const pEl = e.target.querySelector('p');

         if (pEl.style.display === 'none') {
            pEl.style.display = '';
         } else {
            pEl.style.display = 'none';
         }
      });
   }
}