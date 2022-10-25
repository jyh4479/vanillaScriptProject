export const stringToHTML = (str) => {
    const dom = document.createElement('div');
    dom.innerHTML = str;
    return dom;
};

export const clearChildElement = (el) => {
    while (el.firstChild) {
        el.removeChild(el.lastChild);
    }
}