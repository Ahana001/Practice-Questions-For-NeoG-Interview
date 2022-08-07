const inputs = document.querySelectorAll('.inputs');
const plusButton = document.querySelector("#plus");
const minusButton = document.querySelector("#minus");
const divideButton = document.querySelector("#divide");
const multiplyButton = document.querySelector("#multiply");
const output = document.querySelector('.output-container');

function operation(operator) {
    var oprand1 = Number(inputs[0].value);
    var oprand2 = Number(inputs[1].value);

    switch (operator) {
        case "+": return oprand1 + oprand2;
        case "-": return oprand1 - oprand2;
        case "*": return oprand1 * oprand2;
        case "/": return oprand1 / oprand2;
    }

}
plusButton.addEventListener("click", function () {
    var result = operation("+");
    output.innerText = result;
});

minusButton.addEventListener("click", function () {
    var result = operation("-");
    output.innerText = result;
});

multiplyButton.addEventListener('click', () => {
    var result = operation("*");
    output.innerText = result;
});


divideButton.addEventListener('click', () => {
    var result = operation("/");
    output.innerText = result;
});
