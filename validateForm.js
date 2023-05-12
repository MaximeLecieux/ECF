let registrationForm = document.getElementById('registrationForm')
let connexionForm = document.getElementById('connexionForm')
let allergyYesCheck = document.getElementById('allergyYes')
let validatePasswordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/ // Regex for strong password

connexionForm.addEventListener('submit', function(e){ // validate form for modal connexion
    let emailConnexionForm = document.getElementById('emailConnexionForm')
    let passwordConnexionForm = document.getElementById('passwordConnexionForm')

    if (emailConnexionForm.value.trim() === ""){
        let errorEmailConnexionForm = document.getElementById('errorEmailConnexionForm')
        errorEmailConnexionForm.innerHTML = "Une adresse mail est requis"
        errorEmailConnexionForm.style.color = "red"
        e.preventDefault()
    } 

    if (passwordConnexionForm.value.trim() === ""){
        let errorPasswordConnexionForm = document.getElementById('errorPasswordConnexionForm')
        errorPasswordConnexionForm.innerHTML = "Un mot de passe est requis"
        errorPasswordConnexionForm.style.color = "red"
        e.preventDefault()
    } else if (validatePasswordRegex.test(passwordConnexionForm.value) === false){
        let errorPasswordConnexionForm = document.getElementById('errorPasswordConnexionForm')
        errorPasswordConnexionForm.innerHTML = "Mot de passe invalide"
        errorPasswordConnexionForm.style.color = "red"
        e.preventDefault()
    }
})

allergyYesCheck.addEventListener('change', function(e){ // input creation function to indicate allergies for registration.html
    let parent = document.getElementById('allergyYesChecked')
    let allergies = document.createElement("INPUT");
    allergies.setAttribute("type", "text");
    allergies.setAttribute("id", "allergiesRegistrationForm");
    allergies.setAttribute("placeholder", "Indiquer vos allergies");
    parent.appendChild(allergies)
})

registrationForm.addEventListener('submit', function(e){ // validate form for registration.html
    let emailRegistrationForm = document.getElementById('emailRegistrationForm')
    let passwordRegistrationForm = document.getElementById('passwordRegistrationForm')
    let numberCoversRegistrationForm = document.getElementById('numberCoversRegistrationForm')
    console.log(numberCoversRegistrationForm.value)

    if (emailRegistrationForm.value.trim() === ""){
        let errorEmailRegistrationForm = document.getElementById('errorEmailRegistrationForm')
        errorEmailRegistrationForm.innerHTML = "Une adresse mail est requise"
        errorEmailRegistrationForm.style.color = "red"
        e.preventDefault()
    }

    if (passwordRegistrationForm.value.trim() === ""){
        let errorPasswordRegistrationForm = document.getElementById('errorPasswordRegistrationForm')
        errorPasswordRegistrationForm.innerHTML = "Un mot de passe est requis"
        errorPasswordRegistrationForm.style.color = "red"
        e.preventDefault()
    } else if (validatePasswordRegex.test(passwordRegistrationForm.value) === false){
        let errorPasswordRegistrationForm = document.getElementById('errorPasswordRegistrationForm')
        errorPasswordRegistrationForm.innerHTML = "Un mot de passe valide est requis (8 caractères minimum, une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial)"
        errorPasswordRegistrationForm.style.color = "red"
        e.preventDefault()
    }

    if (numberCoversRegistrationForm.value.trim() === ""){
        let errorNumberCoversRegistrationForm = document.getElementById('errorNumberCoversRegistrationForm')
        errorNumberCoversRegistrationForm.innerHTML = "Un nombre de couvert par défaut est requis"
        errorNumberCoversRegistrationForm.style.color = "red"
        e.preventDefault()
        }
})