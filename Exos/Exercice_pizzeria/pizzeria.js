let SumUpOrderPhrase = "";

let remerciement = 'Merci d\'avoir commandé chez "La Pizzeria Raffinata"';

let commande = ["4 fromages : bleu, chèvre, emmental, boursin", "15 euros", "Coca-Cola"];

let client ={
    nom : "Robert",
    prenom : "Jules",
    adresse : "4 Avenue des ailes, 31542 St Jules"
}

SumUpOrderPhrase = `Bonjour ${client.prenom}.

${remerciement}
Votre commande du jour : ${commande}.

Votre commande sera livrée à ${client.adresse}.

Merci pour votre commande, bon appétit et à bientôt !


Blague du jour : Qu'est ce qu'une pizza a dit à une autre pizza qui lui demandait
des conseils? "Suis ta pâte et tout ira bien!"
`;

console.log(SumUpOrderPhrase);