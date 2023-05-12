let reservationForm = document.getElementById('reservationForm')
let regexValidationForm = /^[a-zA-Z-\s]+$/

reservationForm.addEventListener('submit', function(e){
    let nameReservationForm = document.getElementById('nameReservationForm')
    let numberCoversReservationForm = document.getElementById('numberCoversReservationForm')
    let dateReservationForm = document.getElementById('dateReservationForm')
    let allergyReservationForm = document.getElementById('allergyReservationForm')
    

    if (nameReservationForm.value.trim() === ""){
        let errorNameReservationForm = document.getElementById('errorNameReservationForm')
        errorNameReservationForm.innerHTML = "Un nom de réservation est obligatoire"
        errorNameReservationForm.style.color = "red"
        e.preventDefault()
    } else if (regexValidationForm.test(nameReservationForm.value) === false){
        let errorNameReservationForm = document.getElementById('errorNameReservationForm')
        errorNameReservationForm.innerHTML = "Un nom valide est requis"
        errorNameReservationForm.style.color = "red"
        e.preventDefault()
    }
    
    if (numberCoversReservationForm.value.trim() === ""){
        let errorNumberCoversReservationForm = document.getElementById('errorNumberCoversReservationForm')
        errorNumberCoversReservationForm.innerHTML = "Un nombre de couvert est obligatoire"
        errorNumberCoversReservationForm.style.color = "red"
        e.preventDefault()
    }

    if (dateReservationForm.value === ""){
        let errorDateReservationForm = document.getElementById('errorDateReservationForm')
        errorDateReservationForm.innerHTML = "Une date est requise"
        errorDateReservationForm.style.color = "red"
        e.preventDefault()
    }

    if (regexValidationForm.test(allergyReservationForm.value) === false){
        let errorAllergyReservationForm = document.getElementById('errorAllergyReservationForm')
        errorAllergyReservationForm.innerHTML = "Veuillez saisir une allergie valide"
        errorAllergyReservationForm.style.color = "red"
        e.preventDefault()
    }
})