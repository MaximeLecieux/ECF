let connexionForm = document.getElementById('connexionForm')
let regex = /^[a-zA-Z0-9-@.]+$/

connexionForm.addEventListener('submit', function(e){
    let email = document.getElementById('email')
    let password = document.getElementById('password')

    if (email.value.trim() === ""){
        let errorEmail = document.getElementById('errorEmail')
        errorEmail.innerHTML = "Une adresse mail est requis"
        errorEmail.style.color = "red"
        e.preventDefault()
    } else if (regex.test(email.value) === false){
        let errorEmail = document.getElementById('errorEmail')
        errorEmail.innerHTML = "Une adresse mail valide est requis"
        errorEmail.style.color = "red"
        e.preventDefault()
    } else if (email.value.includes("@") === false){
        let errorEmail = document.getElementById('errorEmail')
        errorEmail.innerHTML = "Une adresse mail valide est requis (doit contenir un @)"
        errorEmail.style.color = "red"
        e.preventDefault()
    }

    if (password.value.trim() === ""){
        let errorPassword = document.getElementById('errorPassword')
        errorPassword.innerHTML = "Un mot de passe est requis"
        errorPassword.style.color = "red"
        e.preventDefault()
    }
})