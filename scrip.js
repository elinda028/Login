const signUpButton = document.getElementById('signUp')
const signInButton = document.getElementById('signIn')
const main = document.getElementById('main')

signUpButton.addEventListener('click', () => {
    main.classList.add("right-panel-active")
})
signInButton.addEventListener('click',() => {
    main.classList.remove("right-panel-active")
})
document.querySelector('.btn1').addEventListener('click', () => {
    window.location.href = "tableAdmin.html"
})

var email = document.forms['form']['Email'];
var password = document.forms['form']['password'];
var usename = document.forms['form']['Usename'];
var email_eror = document.getElementById('email_eror');
var user_eror = document.getElementById('user_eror');
var pass_eror = document.getElementById('pass_eror');

function validated() {
    if (email.value.length < 9> {
        email.style.border = "1px solid red";
        email_eror.style.display = "block"
        email.focus();
        return false;
    }
}
