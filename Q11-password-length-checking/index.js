const password = document.querySelector("#password");
const errorMessage = document.querySelector("#error");
const submit = document.querySelector("#submit");
password.style.outline = "none"
submit.disabled = true;
password.addEventListener('input', (e) => {
    if (e.target.value.length < 10) {
        submit.disabled = true;
        password.style.border = "3px solid red";
    } else {
        submit.disabled = false;
        password.style.border = "3px solid green";
    }
})
submit.addEventListener('click', () => {
    console.log("submitted....")
})