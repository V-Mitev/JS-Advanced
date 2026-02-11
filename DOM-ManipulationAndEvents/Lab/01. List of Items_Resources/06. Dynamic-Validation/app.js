function validate() {
    const emailInput = document.getElementById('email');

    emailInput.addEventListener('change', (e) => {
        const isValid = /^[^@]+@[^@.]+\.[^@.]+$/.test(emailInput.value);

        if (!isValid) {
            e.target.classList.add('error');
        } else {
            e.target.classList.remove('error');
        }
    });
}