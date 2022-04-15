export { LightboxFactory };
import { closeLightbox } from '../utils/lightBox.js'


function LightboxFactory(data) {
    const { title, image, video } = data;
    const videoFile = `assets/medias/${video}`;
    const picture = `assets/medias/${image}`;

    const lightbox = document.querySelector('.lightbox');
    const lightboxMedia = document.createElement('div');
    lightboxMedia.className = 'lightbox__container';
    const lightboxIcons = document.createElement('div');
    lightboxIcons.className = 'lightbox__icons';
    const mediaLien = document.createElement('div');
    mediaLien.className = 'lightbox__container__media';

    if('video' in data) {
        const video = document.createElement('video');
        video.setAttribute('src', videoFile);
        video.setAttribute('controls', true);
        mediaLien.appendChild(video);
        lightboxMedia.appendChild(mediaLien);
    } else {
        const img = document.createElement('img');
        img.setAttribute('src', picture);
        img.setAttribute('alt', 'photo' + '' + title);
        mediaLien.appendChild(img);
        lightboxMedia.appendChild(mediaLien);
    }
    
    const intituleMedia = document.createElement('h2');
    const suivant = document.createElement('i');
    const precedent = document.createElement('i');
    const fermer = document.createElement('i');

    suivant.className = 'fas fa-angle-right';
    suivant.id = 'lightbox__next';

    precedent.className = 'fas fa-angle-left';
    precedent.id = 'lightbox__prev';

    fermer.className = 'fas fa-times';
    fermer.id = 'lightbox__close';
    fermer.addEventListener("click", closeLightbox);

    lightboxIcons.appendChild(fermer);
    lightboxIcons.appendChild(precedent);
    lightboxIcons.appendChild(suivant);
    lightbox.appendChild(lightboxIcons);
    intituleMedia.textContent = title;
    lightbox.appendChild(lightboxMedia);
    lightboxMedia.appendChild(intituleMedia);
}