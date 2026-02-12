function lockedProfile() {
    document.getElementById('main').addEventListener('click', (e) => {
        if(e.target.tagName === 'BUTTON') {
            const button = e.target;
            const profile = e.target.parentNode;
            const lockBtn = profile.querySelector('input[type="radio"]');

            if(lockBtn.checked) {
                return;
            }

            button.textContent =  button.textContent === 'Show more' ? 'Hide it' : 'Show more';

            const userInfo = profile.querySelector('div');

            userInfo.style.display = userInfo.style.display === 'none' ? 'block' : 'none';
        }
    });
}