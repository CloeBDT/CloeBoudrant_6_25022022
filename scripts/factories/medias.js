export { mediasFactory, testMediasFactory };

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
function testMediasFactory(data) {
    const { image, title, likes, video } = data;
    const picture = `assets/medias/${image}`;
    const videoFile = `assets/medias/${video}`;

    function getUserTestMediaCardDOM() {
        if("video" in data) {
            const article = document.createElement('article');
            const video = document.createElement('video');
            const div = document.createElement('div');
            const h2 = document.createElement('h2');
            const p = document.createElement('p');
            const heart = document.createElement('i');

            video.setAttribute('src', videoFile);
            h2.textContent = title;
            h2.setAttribute('aria-label', title);
            p.textContent = likes;
            heart.classList.add('fas', 'fa-heart');

            article.appendChild(video);
            article.appendChild(div);
            div.appendChild(h2);
            div.appendChild(p);
            p.appendChild(heart);

            return article;

        } else {
            const article = document.createElement('article');
            const img = document.createElement('img');
            const div = document.createElement('div');
            const h2 = document.createElement('h2');
            const p = document.createElement('p');
            const heart = document.createElement('i');

            img.setAttribute('src', picture);
            img.setAttribute('alt', 'photo' + '' + title);
            h2.textContent = title;
            h2.setAttribute('aria-label', title);
            p.textContent = likes;
            heart.classList.add('fas', 'fa-heart');

            article.appendChild(img);
            article.appendChild(div);
            div.appendChild(h2);
            div.appendChild(p);
            p.appendChild(heart);
    
            return article;
        }
    }
    return {getUserTestMediaCardDOM};
}
