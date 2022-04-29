export { openLightbox, closeLightbox };

//OUVERTURE ET FERMETURE DE LA LIGHTBOX
const lightbox = document.querySelector('.lightbox');

function openLightbox() {
    lightbox.style.display = "flex";
    }

function closeLightbox() {
    lightbox.style.display = "none";
    const lightboxMedia = document.querySelector('.lightbox__container');
    const lightboxIcons = document.querySelector('.lightbox__icons');

    lightbox.appendChild(lightboxMedia);
    lightbox.appendChild(lightboxIcons);

    lightbox.removeChild(lightboxMedia);
    lightbox.removeChild(lightboxIcons);
}