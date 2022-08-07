const text = document.getElementById('text');
const increase = document.querySelector('#increase');
const decrease = document.querySelector('#decrease');

increase.addEventListener('click', () => {
    var style = window.getComputedStyle(text).getPropertyValue('font-size');
    var fontSize = parseFloat(style)
    fontSize = (fontSize + 2) + 'px';
    text.style.fontSize = fontSize;

});

decrease.addEventListener('click', () => {
    var style = window.getComputedStyle(text).getPropertyValue('font-size');
    var fontSize = parseFloat(style)
    fontSize = (fontSize - 2) + 'px';
    text.style.fontSize = fontSize;
});