function editElement(el, matcher, replacer) {
    while (el.textContent.includes(matcher)) {
        el.textContent = el.textContent.replace(matcher, replacer);
    }
}

function editElement(el, matcher, replacer) {
    let text = el.textContent;
    el.textContent = text.split(matcher).join(replacer);
}