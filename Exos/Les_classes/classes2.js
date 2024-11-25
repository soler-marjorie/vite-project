class Employee {
    constructor(nom, prenom, age, salaireMensuel) {
        this._nom = nom;
        this._prenom = prenom;
        this._age = age;
        this._salaireMensuel = salaireMensuel;
        this._cout = this.calculCout();// Calcul cout annuel de l'employé :attribut en outMode
    }
    
    // me servira à passer le cout d 1 employé dans la classe PME
    getCout() {
        return this._cout;
    }

    //calcul cout total d 1 salarié
    calculCout() {
        const NB_MOIS_SAL = 12;
        const LA_TAXE = 0.9;
        //Un léger calcul
        return this._salaireMensuel * NB_MOIS_SAL * (1 + LA_TAXE);
    }
}

class Pme {
    constructor(nom, equipe, ventes, coutsFixes, achats) {
        this._nom = nom;
        this._equipe = equipe;
        this._cout = coutsFixes + achats;// On peut assigner directement un calcul ici
        this._ventes = ventes;
        this._bilan = 0;    // attribut en OutMode a calculer
    }

    bilanCalculed() {
        console.log(this._equipe);
        let cumulEquipe = 0;
        console.log(`${this._nom} : Cout Initial : ${this._cout}`);

        //Boucle qui parcourt le tableau des salariés (equipe)
        //Sur chaque salarié parcouru dans le tableau, on récupère et cumule le cout de ce Salarié
        for (let unSalarie of this._equipe) {
            cumulEquipe += unSalarie.getCout();
        }

        console.log(`${this._nom} : Cout Total Equipe : ${cumulEquipe}`);

        //Ensuite dans les couts de l'entreprise on cumul le cout de toute l'équipe
        this._cout += cumulEquipe;
        console.log(`${this._nom} : VENTES : ${this._ventes}`);

        //Dans les _cout on va avoir les frais fixe + frais achat et 
        //on vient de rajouter en + le cout total d'une equipe
        //donc le bilan de la pme : les ventes moins tous les couts (frais fixes, achat + cout total de l'equipe à l'année)
        this._bilan = this._ventes - this._cout;
        console.log(`${this._nom} : BILAN : ${this._bilan}`);
    }
}