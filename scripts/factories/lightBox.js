export { LightboxFactory };
import { closeLightbox } from '../utils/lightBox.js'
import { next, prev} from '../factories/medias.js'


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
        img.className = 'media-lightbox';
        lightbox.appendChild(img);
        img.setAttribute('tabindex', '0');
    }
    
    const intituleMedia = document.createElement('h2');
    const suivant = document.createElement('img');
    const precedent = document.createElement('img');
    const fermer = document.createElement('img');
    intituleMedia.setAttribute('tabindex', '0');

    suivant.setAttribute('src', 'assets/icons/next.svg');
    suivant.id = 'lightbox__next';
    suivant.setAttribute('aria-label', 'Next image');
    suivant.setAttribute('tabindex', '0');
    suivant.addEventListener('click', next);
    

    precedent.setAttribute('src', 'assets/icons/previous.svg');
    precedent.id = 'lightbox__prev';
    precedent.setAttribute('aria-label', 'Previous image');
    precedent.setAttribute('tabindex', '0');
    precedent.addEventListener('click', prev);
    

    fermer.setAttribute('src', 'assets/icons/close2.svg');
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