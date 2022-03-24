export { mediasFactory };

    //FACTORY DE L'AFFICHAGE DES MEDIAS DES PHOTOGRAPHES
function mediasFactory(data) {
    const { name, city, country, tagline, portrait } = data;
    const picture = `assets/photographers/${portrait}`;
  
    function getUserMediaCardDOM() {
        const box = document.createElement('div');
        const photo = document.querySelector('.photo');
        const texte = document.querySelector('.texte');

        const h1 = document.createElement('h1');
        const h2 = document.createElement('h2');
        const p = document.createElement('p');
        const img = document.createElement('img');
  
        h1.textContent = name;
        h2.textContent = city + ', ' + country;
        p.textContent = tagline;
        img.setAttribute('src', picture);
        img.setAttribute('alt', 'photo' + '' + name);
        

        texte.appendChild(h1);
        texte.appendChild(h2);
        texte.appendChild(p);
        photo.appendChild(img);
  
        return box;
    }
    return {getUserMediaCardDOM};
}
