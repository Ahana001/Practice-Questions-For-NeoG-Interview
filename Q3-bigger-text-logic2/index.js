const input = document.querySelector("#input");
const h1 = document.querySelector("#h1");
const h2 = document.querySelector("#h2");
const h3 = document.querySelector("#h3");
const output = document.querySelector("#output");

h1.addEventListener('click', () => {
    const text = input.value;
    output.innerHTML = `<h1>${text}</h1>`
})

h2.addEventListener('click', () => {
    const text = input.value;
    output.innerHTML = `<h2>${text}</h2>`
})

h3.addEventListener('click', () => {
    const text = input.value;
    output.innerHTML = `<h3>${text}</h3>`
})
