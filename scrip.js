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
