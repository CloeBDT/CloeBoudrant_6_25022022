export { openLightbox, closeLightbox };

//OUVERTURE ET FERMETURE DE LA LIGHTBOX
const lightbox = document.querySelector('.lightbox');

function openLightbox() {
    lightbox.style.display = "flex";
    document.querySelector('.lightbox').focus();
}

function closeLightbox() {
    lightbox.style.display = "none";
    lightbox.innerHTML = '';
}