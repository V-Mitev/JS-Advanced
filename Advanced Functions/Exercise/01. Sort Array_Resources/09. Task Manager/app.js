function solve() {
    const task = document.getElementById('task');
    const date = document.getElementById('date');
    const description = document.getElementById('description');

    const sections = document.querySelectorAll('section');
    const openSection = sections[1];
    const inProgressSection = sections[2];
    const completeSection = sections[3];

    document.getElementById('add').addEventListener('click', (e) => {
        e.preventDefault();

        const taskValue = task.value;
        const dateValue = date.value;
        const descriptionValue = description.value;

        if (!taskValue || !dateValue || !descriptionValue)
            return;

        const article = document.createElement('article');

        const h3 = document.createElement('h3');
        h3.textContent = taskValue;

        const pDesc = document.createElement('p');
        pDesc.textContent = 'Description: ' + descriptionValue;

        const pDate = document.createElement('p');
        pDate.textContent = 'Due Date: ' + dateValue;

        const div = document.createElement('div');
        div.classList.add('flex');

        const startBtn = document.createElement('button');
        startBtn.textContent = 'Start';
        startBtn.classList.add('green');

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('red');

        div.appendChild(startBtn);
        div.appendChild(deleteBtn);

        article.appendChild(h3);
        article.appendChild(pDesc);
        article.appendChild(pDate);
        article.appendChild(div);

        // Get the content div inside the Open section
        openSection.querySelector('div:last-child').appendChild(article);

        task.value = '';
        date.value = '';
        description.value = '';
    });

    // Delegate from Open section — handles Start and Delete
    openSection.addEventListener('click', (e) => {
        const btn = e.target;
        const article = btn.closest('article');

        if (btn.classList.contains('green')) {
            // Start clicked — move to In Progress, swap buttons
            const div = btn.parentElement;
            div.innerHTML = '';

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.classList.add('red');

            const finishBtn = document.createElement('button');
            finishBtn.textContent = 'Finish';
            finishBtn.classList.add('orange');

            div.appendChild(deleteBtn);
            div.appendChild(finishBtn);

            inProgressSection.querySelector('div:last-child').appendChild(article);

        } else if (btn.classList.contains('red')) {
            // Delete clicked
            article.remove();
        }
    });

    // Delegate from In Progress section — handles Delete and Finish
    inProgressSection.addEventListener('click', (e) => {
        const btn = e.target;
        const article = btn.closest('article');

        if (btn.classList.contains('red')) {
            article.remove();

        } else if (btn.classList.contains('orange')) {
            // Finish clicked — remove buttons div, move to Complete
            article.querySelector('.flex').remove();
            completeSection.querySelector('div:last-child').appendChild(article);
        }
    });
}