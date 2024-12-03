//Exemple 1 - balise hello-world
// Définir une classe pour le custom element
class HelloWorld extends HTMLElement {
    constructor() {
        super(); // Appelle le constructeur de la classe parent

        // Ajoute du contenu directement dans l'élément
        this.textContent = "Hello, World!";
        const mot = this.getAttribute('mot') || 'World';
        const element = document.createElement('p');
        element.textContent = `Bonjour, ${mot}!`;
        this.appendChild(element);
    }
}
customElements.define('hello-world', HelloWorld);


//Exemple 2 - phrase-box phrase
class PhraseBox extends HTMLElement {
    constructor() {
      super();
  
      // Récupérer la phrase depuis l'attribut
      // le this représente l'instance de classe sur laquelle on travaille ici notre element HTML custom
  
      const phrase = this.getAttribute('phrase');
  
      // Créer un élément texte pour afficher la phrase
      const textElement = document.createElement('p');
      // un peu de style bootstrap 
      textElement.classList.add('bg-primary-subtle');
  
      textElement.textContent = phrase;
  
      // Ajouter l'élément texte dans le Custom Element
      this.appendChild(textElement);
    }
}
  
// Déclarer le Custom Element
// Côté HTML la balise s'utilisera sous le nom <phrase-box></phrase-box>
  
customElements.define('phrase-box', PhraseBox);



//Exemple 3 - custom avec bootstrap
class UserBox extends HTMLElement {
    constructor() {
        super();

        const imageUser = this.getAttribute('imageUser');
        const nameUser = this.getAttribute('nameUser');
        const ageUser = this.getAttribute('ageUser');

        const divUserBox = document.createElement('div');
        divUserBox.classList.add('card', 'bg-primary-subtle');

        const imgUser = document.createElement('img');
        imgUser.src = imageUser;
        imgUser.classList.add('card-img-top');
        imgUser.alt = nameUser;
        imgUser.style.maxWidth = '100%';
        imgUser.style.height = '25%';

        const divUserBody = document.createElement('div');
        divUserBody.classList.add('card-body');

        const h5UserName = document.createElement('h5');
        h5UserName.classList.add('card-title');
        h5UserName.textContent = nameUser;

        const pUserAge = document.createElement('p');
        pUserAge.classList.add('card-text');
        pUserAge.textContent = `Age: ${ageUser}`;

        divUserBody.appendChild(h5UserName);
        divUserBody.appendChild(pUserAge);

        divUserBox.appendChild(imgUser);
        divUserBox.appendChild(divUserBody);

        this.appendChild(divUserBox);
    }
}

customElements.define('user-box', UserBox);