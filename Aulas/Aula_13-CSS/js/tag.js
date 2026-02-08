const colors ={
    p: '#f44336',
    div: '#2196f3',
    section: '#4caf50',
    article: '#ff9800',
    span: '#9c27b0',
    header: '#3f51b5',
    footer: '#009688',
    padrao: '#616161',
    ul: '#795548',
    li: '#e91e63',
    form: '#00bcd4',
    body: '#607d8b',
    
    get(tagName) {
        return this[tagName]  ? this[tagName] : this.padrao;
    }
    

}
document.querySelectorAll('.tag').forEach(box => {
    const tagName = box.tagName.toLowerCase();

    box.computedStyleMap.borderColor = colors[tagName] || colors.padrao;

    if (!box.classList.contains('nolabel')) {
        const label = document.createElement('label');
        label.style.backgroundColor = colors[tagName] || colors.padrao;
        label.innerHTML = tagName;
        box.insertBefore(label, box.childNodes[0]);
    }
});