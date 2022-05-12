//GESTION DU TRIEUR DE MEDIAS
const button = document.querySelector('.button');
const selector = document.querySelector('.selector');
const vitrine = document.querySelector('.vitrine'); 
const optionPopularite = document.querySelector('.bloc_popularite');
const optionDate = document.querySelector('.bloc_date');
const optionTitre = document.querySelector('.bloc_titre');

//OUVERTURE ET FERMETURE DE TRIER PAR
button.addEventListener('click', () => {
    button.style.display = 'none';
    selector.style.display = 'flex';
});

optionPopularite.addEventListener('click', () => {
    button.style.display = 'flex';
    selector.style.display = 'none';
    vitrine.textContent = "Popularité";
});
optionPopularite.addEventListener('keydown', e => {
    if (e.key === "Enter") {
        button.style.display = 'flex';
        selector.style.display = 'none';
        vitrine.textContent = "Popularité";
    }  
});

optionDate.addEventListener('click', () => {
    button.style.display = 'flex';
    selector.style.display = 'none';
    vitrine.textContent = "Date";
});
optionDate.addEventListener('keydown', e => {
    if (e.key === "Enter") {
        button.style.display = 'flex';
        selector.style.display = 'none';
        vitrine.textContent = "Date";
    }  
});

optionTitre.addEventListener('click', () => {
    button.style.display = 'flex';
    selector.style.display = 'none';
    vitrine.textContent = "Titre";
});
optionTitre.addEventListener('keydown', e => {
    if (e.key ===    "Enter") {
        button.style.display = 'flex';
        selector.style.display = 'none';
        vitrine.textContent = "Titre";
    }  
});
