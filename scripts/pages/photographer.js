import { mediasFactory, DataMediasFactory, mediaArray } from '../factories/medias.js';
import { next, prev } from '../factories/medias.js';
import { closeLightbox } from '../utils/lightBox.js';
import { closeModal } from '../utils/contactForm.js';
export { incrementationLike };

//Renvoi vers la page du photographe ciblé
const url = new URL(window.location.href);
const photographerId = url.searchParams.get("id");

async function getMedias() {
    //Récupération ressources JSON
    const response = await fetch('data/photographers.json')
    const data = await response.json()
    return data;
}
  
async function displayData(photographers) {
    photographers.forEach((photographer) => {
        if (photographer.id == photographerId) {
            const photographerModel = mediasFactory(photographer);
            photographerModel.getUserMediaCardDOM();
        }
    });
}

async function displayMediaData(media, orderSort) {
    //Cible l'emplacement ou afficher les éléments
    const mediaSection = document.querySelector('.media_section');
    mediaSection.innerHTML = '';
    mediaArray.length = 0;
    //Renvoi des médias triés
    sortMedia(media, orderSort);
    
    media.forEach((media) => {
        if (media.photographerId == photographerId) {
            const mediaModel = DataMediasFactory(media);
            const userMediaCardDOM = mediaModel.getUserDataMediaCardDOM();
            mediaSection.appendChild(userMediaCardDOM);
        }
    });
}

//Fonction de tri des médias
function sortMedia(media, sortBy) {
    switch (sortBy) {
        case 'Popularité' :
            media.sort(function (a, b) {
            return b.likes - a.likes;
            })
            break;
    
        case 'Date' :
            media.sort (function (a, b) {
            return new Date(b.date) - new Date(a.date);
            })
            break;
    
        case 'Titre' :
            media.sort (function (a, b) {
            return a.title.localeCompare (b.title);
            })
            break;
    }
}
  
async function init() {
    // Récupère les datas
    const { photographers, media } = await getMedias();
    const option = document.querySelectorAll('[role="option"]');

    //Ecoute sur les différentes options de tri des médias
    option.forEach((li) => {
        li.addEventListener('click', (e) => {
            displayMediaData(media, e.currentTarget.dataset.filter);
        });
        li.addEventListener('keydown', (e) => {
            if (e.key === "Enter") {
                displayMediaData(media, e.currentTarget.dataset.filter);
            }
        });
    });
    displayData(photographers);
    displayMediaData(media, "Popularité");
    calcTotalLikes();
}
  
init();

//Fonction pour incrémenter et décrémenter les likes des photographies
function incrementationLike(e) {    
    let likeElement = e.currentTarget.previousSibling;
    let likeFix = likeElement.getAttribute("likes");
    let numberLike = parseInt(likeElement.textContent);
    let finalLike = 0;

    if (numberLike == likeFix) {
        finalLike = ++numberLike;
        likeElement.innerHTML = finalLike;
        
    } else {
        finalLike = --numberLike;
        likeElement.innerHTML = finalLike;  
    }
    calcTotalLikes();
}

// Fonction de calcul total des likes
function calcTotalLikes() {
    let array = document.querySelectorAll(".infos-image p");
    let bannerTotal = document.querySelector(".banner p");

    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += parseInt(array[i].innerHTML);
        bannerTotal.innerHTML = sum;
    }
}

//Fonction de fermeture des modals contact et lightbox avec Echap
document.onkeydown = keyboardNav;

    function keyboardNav(e) {
        switch(e.key) {
            case 'ArrowRight' : next();
            break
            case 'ArrowLeft' : prev();
            break
            case 'Escape' :closeLightbox();
                           closeModal();
            break
        }
    }