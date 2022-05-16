export { LightboxFactory };
import { closeLightbox } from '../utils/lightBox.js'


function LightboxFactory(data) {
    const { title, image, video } = data;
    const videoFile = `assets/medias/${video}`;
    const picture = `assets/medias/${image}`;
    
    const lightbox = document.querySelector('.lightbox');

    if('video' in data) {
        const video = document.createElement('video');
        video.setAttribute('src', videoFile);
        video.setAttribute('title', title);
        video.setAttribute('controls', 'controls');
        lightbox.appendChild(video);
        video.setAttribute('tabindex', '0');
    } else {
        const img = document.createElement('img');
        img.setAttribute('src', picture);
        img.setAttribute('alt', title);
        lightbox.appendChild(img);
        img.setAttribute('tabindex', '0');
    }
    
    const intituleMedia = document.createElement('h2');
    const suivant = document.createElement('i');
    const precedent = document.createElement('i');
    const fermer = document.createElement('i');
    intituleMedia.setAttribute('tabindex', '0');

    suivant.className = 'fas fa-angle-right';
    suivant.id = 'lightbox__next';
    suivant.setAttribute('aria-label', 'Next image');
    suivant.setAttribute('tabindex', '0');
    

    precedent.className = 'fas fa-angle-left';
    precedent.id = 'lightbox__prev';
    precedent.setAttribute('aria-label', 'Previous image');
    precedent.setAttribute('tabindex', '0');
    

    fermer.className = 'fas fa-times';
    fermer.id = 'lightbox__close';
    fermer.setAttribute('aria-label', 'Close dialog');
    fermer.setAttribute('tabindex', '0');
    fermer.addEventListener('click', closeLightbox);
    fermer.addEventListener('keydown', e => {
        if (e.key === "Enter") {
            closeLightbox();    
        }
    });

    lightbox.appendChild(intituleMedia);
    lightbox.appendChild(precedent);
    lightbox.appendChild(suivant);
    lightbox.appendChild(fermer);
    lightbox.setAttribute('aria-label', 'image closeup view');
    intituleMedia.textContent = title;
}