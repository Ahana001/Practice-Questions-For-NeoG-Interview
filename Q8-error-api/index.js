const output = document.querySelector("#output");
const btn = document.querySelector("#call-btn");
const url = 'https://randomsuser.me/api';

function fetchApi() {
    fetch(url)
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => {
            console.log(err)
            output.style.color = "red";
            output.innerText = `ERROR MESSAGE : ${err.message}`;
        })
}

btn.addEventListener('click', () => {
    fetchApi();
});