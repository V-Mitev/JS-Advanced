function solve() {
   const textArea = document.getElementsByTagName('textarea')[0];
   const checkoutBtn = document.getElementsByClassName('checkout')[0];
   const addButtons = Array.from(document.getElementsByClassName('add-product'));

   let totalPrice = 0;
   let allProducts = new Set();

   addButtons.forEach(btn => btn.addEventListener('click', (e) => {
      const product = e.target.parentElement.parentElement;

      const title = product.querySelector('.product-title').textContent;
      const price = product.querySelector('.product-line-price').textContent;

      allProducts.add(title);
      totalPrice += Number(price);

      textArea.textContent += `Added ${title} for ${price} to the cart.\n`;
   }));

   checkoutBtn.addEventListener('click', (e) => {
      const uniqueProducts = Array.from(allProducts);

      textArea.textContent += `You bought ${uniqueProducts.join(', ')} for ${totalPrice.toFixed(2)}.`;

      e.target.disabled = true;
      addButtons.forEach(btn => btn.disabled = true);
   });
}