let registrationForm = document.getElementById('registrationForm')
regexRegistrationForm = /^[a-zA-Z0-9-@.]+$/


registrationForm.addEventListener('submit', function(e){
    let emailRegistrationForm = document.getElementById('emailForm')
    let passwordRegistrationForm = document.getElementById('passwordForm')

    if (emailRegistrationForm.value.trim() === ""){
        let errorEmailRegistrationForm = document.getElementById('errorEmailRegistration')
        errorEmailRegistrationForm.innerHTML = "Une adresse mail est requis"
        errorEmailRegistrationForm.style.color = "red"
        e.preventDefault()
    } else if (regexRegistrationForm.test(emailRegistrationForm.value) === false){
        let errorEmailRegistrationForm = document.getElementById('errorEmail')
        errorEmailRegistrationForm.innerHTML = "Une adresse mail valide est requis"
        errorEmailRegistrationForm.style.color = "red"
        connsole.log("Invalide")
        e.preventDefault()
    }

    if (passwordRegistrationForm.value.trim() === ""){
        let errorPasswordRegistrationForm = document.getElementById('errorPasswordRegistration')
        errorPasswordRegistrationForm.innerHTML = "Un mot de passe est requis"
        errorPasswordRegistrationForm.style.color = "red"
        e.preventDefault()
    }
})