export default function photographerFactory(data) {

//FACTORY DE L'AFFICHAGE DES PROFILS DES PHOTOGRAPHES
  const { portrait, name, city, country, tagline, price, id } = data;
  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    //Variables pour la création d'éléments HTML
    const article = document.createElement('article');
    const img = document.createElement('img');
    const h2 = document.createElement('h2');
    const h3 = document.createElement('h3');
    const h4 = document.createElement('h4');
    const p = document.createElement('p');

    //Lien entre la page d'accueil et le renvoi vers la page du photographe clické
    article.addEventListener('click', () => {
      window.location.href = `photographer.html?id=${id}`;
    })

    //Assignation des valeurs aux attributs img, h2, h3, h4, p
    article.setAttribute('tabindex', '2');
    img.setAttribute('src', picture);
    img.setAttribute('alt', 'photo' + ' ' + name);
    h2.textContent = name;
    h2.setAttribute('aria-label', name);
    h3.textContent = city + ', ' + country;
    h4.textContent = tagline;
    p.textContent = price + '€/jour';

    //Affichage dans HTML
    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(h3);
    article.appendChild(h4);
    article.appendChild(p);

    return article;
  }
  return {getUserCardDOM};
}