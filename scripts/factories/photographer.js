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
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');

    //Lien entre la page d'accueil et le renvoi vers la page du photographe clické
    div1.addEventListener('click', () => {
      window.location.href = `photographer.html?id=${id}`;
    })

    div1.addEventListener('keydown', e => {
      if (e.key == "Enter") {
        window.location.href = `photographer.html?id=${id}`;
      }
    });

    //Assignation des valeurs aux attributs img, h2, h3, h4, p
    img.setAttribute('src', picture);
    div1.setAttribute('alt', name);
    h2.textContent = name;
    h2.setAttribute('aria-label', name);
    h3.textContent = city + ', ' + country;
    h4.textContent = tagline;
    p.textContent = price + '€/jour';

    div1.setAttribute('tabindex', '0');
    div2.setAttribute('tabindex', '0');

    //Affichage dans HTML
    article.appendChild(div1);
    article.appendChild(div2);
    div1.appendChild(img);
    div1.appendChild(h2);
    div2.appendChild(h3);
    div2.appendChild(h4);
    div2.appendChild(p);
    div1.className = 'link';
    div2.className = 'static-text';

    return article;
  }
  return {getUserCardDOM};
}