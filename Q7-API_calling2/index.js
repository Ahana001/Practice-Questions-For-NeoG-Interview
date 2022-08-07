const load = document.querySelector("#load");
const url = "https://api.funtranslations.com/translate/minion.json?text=I am developer Ankita";
const output = document.querySelector("#output");

load.addEventListener('click', () => {
    fetch(url)
        .then((res) => {
            return res.json()
        })
        .then(res => {
            output.innerText = res.contents.text + "\n" + res.contents.translated;
        })
});
