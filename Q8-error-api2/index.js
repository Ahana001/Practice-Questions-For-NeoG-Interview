const load = document.querySelector("#load");
const url = "https://api.funtranslations.com/translate/miinion.json?text=I am developer Ankita";
const output = document.querySelector("#output");

load.addEventListener('click', () => {
    fetch(url)
        .then(res => res.json())
        .then(async res => {
            if (res.error) {
                output.innerHTML = `<p>${res.error.message}</p>`;
                output.style.color = "red";
            } else {
                output.innerHTML = `<p>${res.contents.translated}</p>`;
                output.style.color = "green";
            }

        })
});
