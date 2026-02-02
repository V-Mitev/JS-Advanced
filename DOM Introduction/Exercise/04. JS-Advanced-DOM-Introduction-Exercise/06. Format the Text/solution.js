function solve() {
  const textArea = document.getElementById('input');
  const arr = textArea.value.split('.');
  const result = document.getElementById('output');
  result.textContent = '';

  let counter = 0;
  let sentences = '';
  let sentencesCount = arr.length;

  for (let i = 0; i < sentencesCount; i++) {
    let sentence = arr[i].trim();

    if (sentence.length < 1) {
      continue;
    }

    counter++;
    sentences += sentence + '. ';

    if (counter === 3) {
      const pElement = document.createElement('p');
      pElement.textContent = sentences.trim();

      result.appendChild(pElement);

      counter = 0;
      sentences = '';
    }
  }

  if (sentences.length > 0) {
    const pElement = document.createElement('p');
    pElement.textContent = sentences.trim();

    result.appendChild(pElement);
  }
}