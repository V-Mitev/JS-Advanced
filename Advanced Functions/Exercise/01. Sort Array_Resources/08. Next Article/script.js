function getArticleGenerator(articles) {
    let index = 0;
    const content = document.getElementById('content');

    function addDivWithArticle() {
        debugger;
        if (index >= articles.length)
            return;

        const article = document.createElement('article');

        article.textContent = articles[index];
        index++;

        content.appendChild(article);
    }

    return addDivWithArticle;
}
