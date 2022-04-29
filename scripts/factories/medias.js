export { mediasFactory, DataMediasFactory };
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
        const h1 = document.createElement('h1');
        const h2 = document.createElement('h2');
        const p = document.createElement('p');
        const nom = document.createElement('p');
        const img = document.createElement('img');
        const h3 = document.createElement ('h3');
        const displayTotalLikes = document.createElement('p');
        const displayHeart = document.createElement('i');
  
        //Assignation des valeurs aux attributs img, h1, h2, p
        h1.textContent = name;
        h2.textContent = city + ', ' + country;
        p.textContent = tagline;
        nom.textContent = name;
        img.setAttribute('src', picture);
        img.setAttribute('alt', 'photo' + ' ' + name);
        h3.textContent = price + '€ / jour';
        displayHeart.className = 'fas fa-heart';
        
        //Affichage dans HTML
        texte.appendChild(h1);
        texte.appendChild(h2);
        texte.appendChild(p);
        nomContact.appendChild(nom);
        photo.appendChild(img);
        likesPrix.appendChild(h3);
        likesPrix.appendChild(displayTotalLikes);
        likesPrix.appendChild(displayHeart);
    }
    return {getUserMediaCardDOM};
}

//FACTORY DE L'AFFICHAGE DES MEDIAS DES PHOTOGRAPHES SUR LEURS PAGES
function DataMediasFactory(data) {
    const { image, title, likes, video } = data;
    const videoFile = `assets/medias/${video}`;
    const picture = `assets/medias/${image}`;
    
    const article = document.createElement('article');
    const div = document.createElement('div');

    div.addEventListener("click", () => {
        openLightbox();
        LightboxFactory(data);
    })

    function getUserDataMediaCardDOM() {
        if('video' in data) {
            const video = document.createElement('video');

            video.setAttribute('src', videoFile);

            div.appendChild(video);
            article.appendChild(div);

        } else {
            const img = document.createElement('img');
            
            img.setAttribute('src', picture);
            img.setAttribute('alt', 'photo' + ' ' + title);
            
            div.appendChild(img);
            article.appendChild(div);
        }

        const span = document.createElement('span');
        const h2 = document.createElement('h2');
        const p = document.createElement('p');
        p.className = 'likes';
        const heart = document.createElement('i');

        heart.addEventListener('click', incrementationLike);

        h2.textContent = title;
        h2.setAttribute('aria-label', title);
        p.textContent = likes;
        p.setAttribute('likes', likes);
        heart.className = 'fas fa-heart';
        span.className = 'infos-image';
        
        article.appendChild(span);
        span.appendChild(h2);
        span.appendChild(p);
        span.appendChild(heart);

        return article;
    }
    return {getUserDataMediaCardDOM};
}