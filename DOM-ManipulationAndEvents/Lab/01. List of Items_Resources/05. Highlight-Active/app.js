function focused() {
    const inputs = Array.from(document.querySelectorAll('div input'));

    inputs.forEach(input => {
        input.addEventListener("focus", onFocus, false);
        input.addEventListener("blur", onBlur, false);
    });

    function onFocus(e) {
        e.target.parentElement.classList.add('focused');
    }

    function onBlur(e) {
        e.target.parentElement.classList.remove('focused');
    }
}