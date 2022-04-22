const submitbtn = document.querySelector('.btn-submit');
const modal = document.getElementById('contact_modal');
const modal2 = document.querySelector(".modal");
const formData = document.querySelectorAll('.formData');
const prenom = document.getElementById('prenom');
const nom = document.getElementById('nom');
const email = document.getElementById('email');
const message = document.getElementById('message');
const modalConfirm = document.querySelector(".modal-confirm");

//OUVERTURE ET FERMETURE DE LA MODAL
// eslint-disable-next-line no-unused-vars
function displayModal() {
  modal.style.display = 'flex';
  submitbtn.addEventListener('click', validate);
  prenom.addEventListener('input', prenomValid);
  nom.addEventListener('input', nomValid);
  email.addEventListener('input', emailValid);
  message.addEventListener('input', messageValid);
}

// eslint-disable-next-line no-unused-vars
function closeModal() {
  modal.style.display = 'none';
  submitbtn.removeEventListener('click', validate);  
  prenom.removeEventListener('input', prenomValid);
  nom.removeEventListener('input', nomValid);
  email.removeEventListener('input', emailValid);
  message.removeEventListener('input', messageValid);
  modal2.style.display = "block";
  modalConfirm.style.display = "none";
  reinit();
}

//REINITIALISATION DU FORMULAIRE
function reinit() {
  prenom.value = '';
  nom.value = '';
  email.value = '';
  message.value = '';
  formData.forEach((formData) => formData.dataset.errorVisible = false);
}

//VALIDATION DU FORMULAIRE
function prenomValid() {
  if (prenom.checkValidity() !== true) {
    prenom.parentElement.dataset.errorVisible = true;
    return false;
  } else {
    prenom.parentElement.dataset.errorVisible = false;
    return true;
  }
}

function nomValid() {
  if (nom.checkValidity() !== true) {
    nom.parentElement.dataset.errorVisible = true;
    return false;
  } else {
    nom.parentElement.dataset.errorVisible = false;
    return true;
  }
}

function emailValid() {
  if (email.checkValidity() !== true) {
    email.parentElement.dataset.errorVisible = true;
    return false;
  } else {
    email.parentElement.dataset.errorVisible = false;
    return true;
  }
}

function messageValid() {
  if (message.checkValidity() !== true) {
    message.parentElement.dataset.errorVisible = true;
    return false;
  } else {
    message.parentElement.dataset.errorVisible = false;
    return true;
  }
}

function validate(e) {
  e.preventDefault();

  if (validForm() == true) {
    modal2.style.display = "none";
    modalConfirm.style.display = "flex";
    return true;
  } else {
    elementsNotValidated();
    return false;
  }
}

function validForm() {
  if (prenomValid() == true && 
      nomValid() == true && 
      emailValid() == true &&
      messageValid() == true) {
        console.log(prenom.value, nom.value, email.value, message.value);
        return true;
      }
  return false;
}

function elementsNotValidated() {
  prenomValid()
  nomValid()
  emailValid()
  messageValid()
}
