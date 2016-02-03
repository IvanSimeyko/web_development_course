function showText(elem) {
    console.log(elem);
    if (elem.previousElementSibling.clientHeight === 80) {
        elem.previousElementSibling.style.height = '100%';
        elem.innerHTML = 'Sow less...';
    } else {
        elem.previousElementSibling.style.height = '80px';
        elem.innerHTML = 'Read more...';
    }
}