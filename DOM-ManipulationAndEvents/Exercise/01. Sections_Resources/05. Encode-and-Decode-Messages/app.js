function encodeAndDecodeMessages() {
    const buttons = document.querySelectorAll('button');
    const textAreas = document.querySelectorAll('textarea');

    const encodeBtn = buttons[0];
    const encodeTextArea = textAreas[0];

    const decodeBtn = buttons[1];
    const decodeTextArea = textAreas[1];

    encodeBtn.addEventListener('click', (e) => {
        const message = encodeTextArea.value;

        const decodedMessage = message.split('')
            .map(ch => String.fromCharCode(ch.charCodeAt(0) + 1))
            .join('');

        encodeTextArea.value = '';
        decodeTextArea.value = decodedMessage;
    });

    decodeBtn.addEventListener('click', (e) => {
        const message = decodeTextArea.value;

        const decodedMessage = message.split('')
            .map(ch => String.fromCharCode(ch.charCodeAt(0) - 1))
            .join('');

        decodeTextArea.value = decodedMessage;
    });
}