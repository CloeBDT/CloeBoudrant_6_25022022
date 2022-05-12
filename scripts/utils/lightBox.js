export { openLightbox, closeLightbox };

//OUVERTURE ET FERMETURE DE LA LIGHTBOX
const lightbox = document.querySelector('.lightbox');

function openLightbox() {
    lightbox.style.display = "flex";
    document.querySelector('.lightbox').focus();
    document.onkeydown = function(e) {
        if (e.key === "Escape") {
            closeLightbox();
        }
      };
}

function closeLightbox() {
    lightbox.style.display = "none";
    lightbox.innerHTML = '';
}