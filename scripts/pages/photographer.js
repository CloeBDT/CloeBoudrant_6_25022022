import { mediasFactory, DataMediasFactory } from '../factories/medias.js';
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

async function displayMediaData(media) {
    //Cible l'emplacement ou afficher les éléments
    const mediaSection = document.querySelector('.media_section');
    
    media.forEach((media) => {
        if (media.photographerId == photographerId) {
            const mediaModel = DataMediasFactory(media);
            const userMediaCardDOM = mediaModel.getUserDataMediaCardDOM();
            mediaSection.appendChild(userMediaCardDOM);
        }
    });
}
  
async function init() {
    // Récupère les datas
    const { photographers, media } = await getMedias();
    displayData(photographers);
    displayMediaData(media);
    calcTotalLikes();
}
  
init();

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

function calcTotalLikes() {
    let array = document.querySelectorAll(".infos-image p");
    let bannerTotal = document.querySelector(".banner p");

    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += parseInt(array[i].innerHTML);
        bannerTotal.innerHTML = sum;
    }
}