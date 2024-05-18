// Validate password entry
const password = document.querySelector("input[name=pass1]");
const reEnterPass = document.querySelector("input[name=pass2");
const passwordMsgBox = document.querySelector('#passwordErrorMsgBox');
const passErrMsg = document.querySelector('#passErrMsg');

reEnterPass.addEventListener("focusout", ()=> {
    if (password.value != reEnterPass.value) {
        passwordMsgBox.style.display = "block";
        setTimeout(() => {
            passErrMsg.style.top = "0";
        }, 5);
        password.value = "";
        reEnterPass.value = "";
        password.focus();
    }else {
        passErrMsg.style.top = "-100px";
        setTimeout(() => {
            passwordMsgBox.style.display = "none";
        }, 800);
    }
});

// update page rating
const pageRateElement = document.querySelector("input[name=pageRate]");
const rateCountElement = document.querySelector('#rateCount');
// set initial
rateCountElement.innerHTML = pageRateElement.value;
// on value change
pageRateElement.addEventListener('change', ()=> {
    let rateValue = pageRateElement.value;
    rateCountElement.innerHTML = rateValue;
})
