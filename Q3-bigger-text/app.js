const text = document.querySelector('#text');
const h1Btn = document.querySelector('#h1-btn');
const h2Btn = document.querySelector('#h2-btn');
const h3Btn = document.querySelector('#h3-btn');

function createHeading(index) {
    var textNode = text.innerText;
    text.innerHTML = `<h${index}>${textNode}</h${index}>`;
}

h1Btn.addEventListener('click', () => {
    createHeading(1);
});

h2Btn.addEventListener('click', () => {
    createHeading(2);
});

h3Btn.addEventListener('click', () => {
    createHeading(3);
});