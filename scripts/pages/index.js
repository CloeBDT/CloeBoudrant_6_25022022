import photographerFactory from '../factories/photographer.js'

async function getPhotographers() {
  //Récupération ressources JSON
  const response = await fetch('../../data/photographers.json')
  const photographers = await response.json()
  return photographers;
}

async function displayData(photographers) {
  //Cible l'emplacement ou afficher les éléments
  const photographersSection = document.querySelector('.photographer_section');
  
  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  displayData(photographers);
}

init();
