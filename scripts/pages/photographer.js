import mediasFactory from '../factories/medias.js';

const url = new URL(window.location.href);
const photographerId = url.searchParams.get("id");

async function getMedias() {
    const response = await fetch('../../data/photographers.json')
    const data = await response.json()
    return data;
}
  
function displayData(photographers) {
    const photographerProfil = document.querySelector('.photographer_profil');

    photographers.forEach((photographer) => {
        if (photographer.id == photographerId) {
            const photographerModel = mediasFactory(photographer);
            const userCardDOM  = photographerModel.getUserMediaCardDOM();
            photographerProfil.appendChild(userCardDOM );
        }
    });
}
  
async function init() {
    const { photographers } = await getMedias();
    displayData(photographers);
}
  
init();