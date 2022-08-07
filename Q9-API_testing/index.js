const loginBtn = document.querySelector('#login-btn');
const output = document.querySelector('#output');
const url = 'https://mystery-api.kushanksriraj.repl.co/get';

function fetchUrl() {
    output.innerText = "API calling...";
    output.style.color = "black";
    fetch(url)
        .then((res) => {
            console.log(res)
            if (res.status == 401) {
                output.style.color = "red";
                output.innerText = "You are Not Logged in";
            } else if (res.status == 404) {
                output.style.color = "blue";
                output.innerText = "Page Not Found";
            } else {
                output.style.color = "green";
                output.innerText = "API working";
            }
        })
}
loginBtn.addEventListener('click', () => {
    fetchUrl();

})