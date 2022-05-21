export { mediasFactory, DataMediasFactory, next, prev };
export let mediaArray = [];
import { openLightbox } from '../utils/lightBox.js';
import { LightboxFactory } from '../factories/lightBox.js';
import { incrementationLike } from '../pages/photographer.js';

//FACTORY DE L'AFFICHAGE DES PROFILS PERSONNELS DES PHOTOGRAPHES SUR LEURS PAGES
function mediasFactory(data) {
    const { name, city, country, tagline, portrait, price } = data;
    const picture = `assets/photographers/${portrait}`;
  
    function getUserMediaCardDOM() {
        const photo = document.querySelector('.photo');
        const texte = document.querySelector('.texte');
        const nomContact = document.querySelector('.nomContact');
        const likesPrix = document.querySelector('.banner');

        //Variables pour la création d'éléments HTML
        const div = document.createElement('div');
        const h1 = document.createElement('h1');
        const h2 = document.createElement('h2');
        const p = document.createElement('p');
        const nom = document.createElement('p');
        const img = document.createElement('img');
        const h3 = document.createElement ('h3');
        const displayTotalLikes = document.createElement('p');
        const displayHeart = document.createElement('img');
  
        //Assignation des valeurs aux attributs img, h1, h2, p
        h1.textContent = name;
        h2.textContent = city + ', ' + country;
        p.textContent = tagline;
        nom.textContent = name;
        img.setAttribute('src', picture);
        img.setAttribute('alt', name);
        h3.textContent = price + '€ / jour';
        displayHeart.setAttribute('src', 'assets/icons/heart.svg');
        displayHeart.setAttribute('alt', 'likes');
        h1.setAttribute('tabindex', '0');
        div.setAttribute('tabindex', '0');
        img.setAttribute('tabindex', '0');
        likesPrix.setAttribute('tabindex', '0');
        
        //Affichage dans HTML
        texte.appendChild(h1);
        texte.appendChild(div);
        div.appendChild(h2);
        div.appendChild(p);
        nomContact.appendChild(nom);
        photo.appendChild(img);
        likesPrix.appendChild(h3);
        likesPrix.appendChild(displayTotalLikes);
        likesPrix.appendChild(displayHeart);
    }
    return {getUserMediaCardDOM};
}

//FACTORY DE L'AFFICHAGE DES MEDIAS DES PHOTOGRAPHES SUR LEURS PAGES
let currentIndex = 0;

function DataMediasFactory(data) {
    const { image, title, likes, video } = data;
    const videoFile = `assets/medias/${video}`;
    const picture = `assets/medias/${image}`;
    
    const article = document.createElement('article');
    const div = document.createElement('div');

    function getUserDataMediaCardDOM() {
        if('video' in data) {
            const video = document.createElement('video');

            video.setAttribute('src', videoFile);
            video.setAttribute('title', title + ', closeup view');

            div.appendChild(video);
            article.appendChild(div);

            video.setAttribute('tabindex', '0');

            video.addEventListener("click", () => {
                openLightbox();
                LightboxFactory(data);
                currentIndex = (mediaArray.indexOf(data));
            });
        
            video.addEventListener("keydown", (e) => {
                if(e.key == "Enter") {
                    openLightbox();
                    LightboxFactory(data);
                    currentIndex = (mediaArray.indexOf(data));
                }
            });

        } else {
            const img = document.createElement('img');
            
            img.setAttribute('src', picture);
            img.setAttribute('alt', title + ', closeup view');
            img.className = 'media-image';
            
            div.appendChild(img);
            article.appendChild(div);
            
            img.setAttribute('tabindex', '0');

            img.addEventListener("click", () => {
                openLightbox();
                LightboxFactory(data);
                currentIndex = (mediaArray.indexOf(data));
            });
        
            img.addEventListener("keydown", (e) => {
                if(e.key == "Enter") {
                    openLightbox();
                    LightboxFactory(data);
                    currentIndex = (mediaArray.indexOf(data));
                }
            });
        }
        
        const span = document.createElement('span');
        const h2 = document.createElement('h2');
        const p = document.createElement('p');
        p.className = 'likes';
        const heart = document.createElement('img');

        heart.addEventListener('click', incrementationLike);
        heart.addEventListener('keydown', e => {
            if (e.key == "Enter") {
              incrementationLike(e);
            }
        });

        h2.textContent = title;
        p.textContent = likes;
        p.setAttribute('likes', likes);
        p.setAttribute('aria-label', 'nombre de likes');
        heart.setAttribute('src', 'assets/icons/heart.svg');
        heart.className = 'heart-like';
        heart.setAttribute('aria-label', 'likes');
        span.className = 'infos-image';
        h2.setAttribute('tabindex', '0');
        heart.setAttribute('tabindex', '0');
        
        article.appendChild(span);
        span.appendChild(h2);
        span.appendChild(p);
        span.appendChild(heart);
        
        mediaArray.push(data)

        return article;
    }
    return {getUserDataMediaCardDOM};
}

function next() {
    if (currentIndex >= 0 && currentIndex < (mediaArray.length - 1)) {
        const lightbox = document.querySelector('.lightbox');
        lightbox.innerHTML = ''
        currentIndex++
        LightboxFactory(mediaArray[currentIndex])
    }
}
function prev() {
    if (currentIndex >= 1) {
        const lightbox = document.querySelector('.lightbox');
        lightbox.innerHTML = ''
        currentIndex--
        LightboxFactory(mediaArray[currentIndex])
    }
}
