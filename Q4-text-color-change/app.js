const text = document.querySelector("#text");
const redBtn = document.querySelector('#redBtn');
const greenBtn = document.querySelector('#greenBtn');
const blueBtn = document.querySelector('#blueBtn');

function changeColor(color) {
    text.style.color = color;
}
redBtn.addEventListener('click', () => {
    changeColor("red");
});
greenBtn.addEventListener('click', () => {
    changeColor("green");
});
blueBtn.addEventListener('click', () => {
    changeColor("blue");
});