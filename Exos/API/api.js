/*
const divApi = document.querySelector('apiContact');
//de base une ƒ° => est anonyme, astuce pour désanonymiser, on la stocke dans une variable
const contacApi =  async () => {
    //Data va récup Toutes les données de l'api
    const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m');
    console.log(response);
    console.log(response.ok);
    console.log(response.status);
    //Plutôt que de Travailler sur la réponse, on va la transformé en objet JS 
    const dataTransformed = await response.json();
    console.log(dataTransformed);
    apiDiv.innerText = dataTransformed.latitude;
};


let divApi = document.querySelector('.apiContact');
const contactApi =  async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon');
    console.log(response);
    console.log(response.ok);
    console.log(response.status);
    const dataTransformed = await response.json();
    console.log(dataTransformed);

    for(let i = 0; i < result.lenght; i++){
        let poke = document.createElement('p');
        poke.innerText = `${dataTransformed.results[i].name}`;
        console.log('poke');
        divApi.appendChild(poke);
    }
};
contactApi();

//secu ++

const contactApiSecurePlus =  async () => {
    try {
        const rawData = await fetch('https://tyradex.vercel.app/api/v1/pokemon/corvaillus');
        console.log(rawData);
        
        // Vérification du statut de la réponse
        if (!rawData.ok || rawData.status !== 200) { // Vérification du statut 200
            console.error("Erreur lors de la récupération des données : ", rawData.statusText);
            return; // Sortir de la fonction si la réponse n'est pas OK
        }

        const transformedData = await rawData.json();
        console.log(transformedData);
        apiDiv.innerHTML = transformedData.name.fr;
    } catch (error) {
        console.error("Erreur lors de l'appel à l'API : ", error);
    }
}
contactApiSecurePlus();*/

let divApi = document.querySelector('.api');

const contactApi = async () => {
    const response = await fetch('https://tyradex.vercel.app/api/v1/gen/9');
    
    if (response.ok) {
        const dataTransformed = await response.json();

        dataTransformed.forEach(pokemon => {
            // Création de la carte
            let card = document.createElement('div');
            card.classList.add('card', 'mb-3');
            card.style.width = '18rem';
            
            // Image du Pokémon
            let imgPoke = document.createElement('img');
            imgPoke.classList.add('card-img-top');
            imgPoke.style.width= '200px';
            imgPoke.src = pokemon.sprites.regular;
            imgPoke.alt = pokemon.name.fr;
            card.appendChild(imgPoke);
            
            // Corps de la carte
            let cardBody = document.createElement('div');
            cardBody.classList.add('card-body');
            
            // Nom du Pokémon
            let pokeName = document.createElement('h5');
            pokeName.classList.add('card-title');
            pokeName.innerText = pokemon.name.fr;
            cardBody.appendChild(pokeName);
            
            // Type du Pokémon
            let typePoke = document.createElement('p');
            typePoke.classList.add('card-text');
            typePoke.innerText = `Type: ${pokemon.types[0].name}`;
            cardBody.appendChild(typePoke);
            
            // Poids du Pokémon
            let poidsPoke = document.createElement('p');
            poidsPoke.classList.add('card-text');
            poidsPoke.innerText = `Poids: ${pokemon.weight}`;
            cardBody.appendChild(poidsPoke);

            // Ajout du corps de la carte à la carte
            card.appendChild(cardBody);

            // Ajout de la carte dans l'élément de destination
            divApi.appendChild(card);
        });
    } else {
        console.error("Erreur lors de la récupération des données :", response.status);
    }
};

contactApi();