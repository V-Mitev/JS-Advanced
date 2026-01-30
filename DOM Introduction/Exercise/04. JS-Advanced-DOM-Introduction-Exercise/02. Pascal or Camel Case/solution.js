function solve() {
  let words = document.getElementById('text').value
    .toLowerCase()
    .split(' ');

  const convention = document.getElementById('naming-convention').value;
  const result = document.getElementById('result');

  if (convention !== 'Camel Case' && convention !== 'Pascal Case') {
    result.textContent = 'Error!';
    return;
  }

  for (let i = 0; i < words.length; i++) {
    if (i === 0 && convention === 'Camel Case') {
      continue;
    }

    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }

  result.textContent = words.join('');
}