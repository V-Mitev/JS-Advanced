function attachGradientEvents() {
    const gradient = document.getElementById('gradient');
    const result = document.getElementById('result');

    gradient.addEventListener('mousemove', (event) => {
        const mouseX = event.offsetX;

        const gradientWidth = event.target.clientWidth;

        const percentage = (mouseX / gradientWidth) * 100;

        result.textContent = Math.floor(percentage) + '%';
    });
}