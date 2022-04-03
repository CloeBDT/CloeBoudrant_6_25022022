export { mediasFactory, DataMediasFactory };

//FACTORY DE L'AFFICHAGE DES PROFILS PERSONNELS DES PHOTOGRAPHES SUR LEURS PAGES
function mediasFactory(data) {
    const { name, city, country, tagline, portrait } = data;
    const picture = `assets/photographers/${portrait}`;
  
    function getUserMediaCardDOM() {
        const photo = document.querySelector('.photo');
        const texte = document.querySelector('.texte');

        //Variables pour la création d'éléments HTML
        const h1 = document.createElement('h1');
        const h2 = document.createElement('h2');
        const p = document.createElement('p');
        const img = document.createElement('img');
  
        //Assignation des valeurs aux attributs img, h1, h2, p
        h1.textContent = name;
        h2.textContent = city + ', ' + country;
        p.textContent = tagline;
        img.setAttribute('src', picture);
        img.setAttribute('alt', 'photo' + '' + name);
        
        //Affichage dans HTML
        texte.appendChild(h1);
        texte.appendChild(h2);
        texte.appendChild(p);
        photo.appendChild(img);
    }
    return {getUserMediaCardDOM};
}

//FACTORY DE L'AFFICHAGE DES MEDIAS DES PHOTOGRAPHES SUR LEURS PAGES
function DataMediasFactory(data) {
    const { image, title, likes, video } = data;
    const videoFile = `assets/medias/${video}`;
    const picture = `assets/medias/${image}`;
    
    const article = document.createElement('article');

    function getUserDataMediaCardDOM() {
        if("video" in data) {
            const video = document.createElement('video');

            video.setAttribute('src', videoFile);

            article.appendChild(video);

        } else {
            const img = document.createElement('img');

            img.setAttribute('src', picture);
            img.setAttribute('alt', 'photo' + '' + title);

            article.appendChild(img);
        }

        const div = document.createElement('div');
        const h2 = document.createElement('h2');
        const p = document.createElement('p');
        const heart = document.createElement('i');

        h2.textContent = title;
        h2.setAttribute('aria-label', title);
        p.textContent = likes;
        heart.className = 'fas fa-heart';

        article.appendChild(div);
        div.appendChild(h2);
        div.appendChild(p);
        p.appendChild(heart);
    
        return article;
    }
    return {getUserDataMediaCardDOM};
}

function Banner() {
    const banner = document.querySelector(".banner");
    const p = document.createElement('p');
    const heart = document.createElement('i');
    const h3 = document.createElement('h3');

    p.className = 'sommeLikes';
    heart.className = 'fas fa-heart';
    h3.className = 'prixPhorographe';

    banner.appendChild(p);
    p.appendChild(heart);
    banner.appendChild(h3);
    
    return banner;
}

Banner();
