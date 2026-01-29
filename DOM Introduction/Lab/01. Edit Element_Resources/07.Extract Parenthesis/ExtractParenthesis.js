function extract(content) {
    const text = document.getElementById(content).textContent;
    const matches = text.match(/\(([^)]+)\)/g);

    if (!matches) {
        return '';
    }

    return matches
        .map(x => x.slice(1, -1))
        .join('; ');
}