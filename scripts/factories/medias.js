export default function mediasFactory(data) {

    //FACTORIE DE L'AFFICHAGE DES MEDIAS DES PHOTOGRAPHES

    const { name, city, country, tagline, portrait } = data;
    const picture = `assets/photographers/${portrait}`;
  
    function getUserMediaCardDOM() {
        const affichage = document.createElement('affichage');
        const h1 = document.createElement('h1');
        const h2 = document.createElement('h2');
        const p = document.createElement('p');
        const img = document.createElement('img');
  
        h1.textContent = name;
        h2.textContent = city + ', ' + country;
        p.textContent = tagline;
        img.setAttribute('src', picture);
        img.setAttribute('alt', 'photo' + '' + name);
  
        affichage.appendChild(h1);
        affichage.appendChild(h2);
        affichage.appendChild(p);
        affichage.appendChild(img);
  
        return affichage;
    }
    return {getUserMediaCardDOM};
}
