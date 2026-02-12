function solve() {
  const buttons = document.querySelectorAll('button');
  const tbody = document.querySelector('.table tbody');
  const textAreas = document.querySelectorAll('textarea');

  const buyBtn = buttons[1];
  const generateBtn = buttons[0];

  generateBtn.addEventListener('click', (e) => {
    const input = textAreas[0];

    const data = JSON.parse(input.value);

    data.forEach(furniture => {
      const tr = document.createElement('tr');

      const img = document.createElement('img');
      img.src = furniture.img;

      const imgTd = document.createElement('td');
      imgTd.appendChild(img);

      const nameTd = document.createElement('td');
      nameTd.textContent = furniture.name;

      const priceTd = document.createElement('td');
      priceTd.textContent = furniture.price;

      const decFactor = document.createElement('td');
      decFactor.textContent = furniture.decFactor;

      const checkBox = document.createElement('input');
      checkBox.type = 'checkbox';

      const checkBoxTd = document.createElement('td');
      checkBoxTd.appendChild(checkBox);

      tr.appendChild(imgTd);
      tr.appendChild(nameTd);
      tr.appendChild(priceTd);
      tr.appendChild(decFactor);
      tr.appendChild(checkBoxTd);

      tbody.appendChild(tr);
    });
  });

  buyBtn.addEventListener('click', (e) => {
    const allFurniters = tbody.children;

    let boughtFurniters = [];
    let totalPrice = 0;
    let avgDecFactor = 0;

    for (const furniture of allFurniters) {
      const isChecked = furniture.querySelector('td > input').checked;

      if (!isChecked) {
        continue;
      }

      const furnitureData = furniture.children;

      const name = furnitureData[1].textContent;
      const price = Number(furnitureData[2].textContent);
      const decFactor = Number(furnitureData[3].textContent);

      totalPrice += price;
      avgDecFactor += decFactor;
      boughtFurniters.push(name);
    }

    avgDecFactor = avgDecFactor / boughtFurniters.length;

    const output = textAreas[1];

    output.textContent = `Bought furniture: ${boughtFurniters.join(', ')}\n` +
      `Total price: ${totalPrice.toFixed(2)}\n` +
      `Average decoration factor: ${avgDecFactor}`;
  });
}

// [{"name": "Sofa", "img": "https://res.cloudinary.com/maisonsdumonde/image/upload/q_auto,f_auto/w_200/img/grey-3-seater-sofa-bed-200-13-0-175521_9.jpg", "price": 150, "decFactor": 1.2}]