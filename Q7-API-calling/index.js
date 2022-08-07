const callBtn = document.querySelector('#call-btn');
const url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=";
const input = document.querySelector('#input');
function generateUrl(text) {
    return url + text;
}

callBtn.addEventListener('click', () => {
    var name = "testing";
    if (input.value.length !== 0) {
        name = input.value;
    }
    fetch(generateUrl(name))
        .then(res => res.json())
        .then(res => {
            console.log(`Response : ${res.contents.translated}`)
            console.log(`text : ${res.contents.text}`)

        })
        .catch((err) => { console.log(err) })
});