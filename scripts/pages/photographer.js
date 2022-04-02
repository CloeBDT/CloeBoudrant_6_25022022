import { mediasFactory, DataMediasFactory } from '../factories/medias.js';

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
}
  
init();