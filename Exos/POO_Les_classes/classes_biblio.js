class Livre{
    constructor(titre, auteur, disponible){
        this.titre = titre;
        this.auteur = auteur;
        this.disponible = disponible;
    }

    //méthodes
    emprunter(){
        try{
            if(this.disponible == true){
                console.log(`Le livre ${this.titre} est disponible.`)
                this.disponible = false;
            }else{
                console.warn(`Le livre ${this.titre} est indisponible.`);
            }
        }catch{
            console.error("une erreur est survenue.")
        }
    }

    retourner(){
        if(this.disponible == false){
            this.disponible = true;
            console.log(`Le livre ${this.titre} à bien été retourné.`)
        }
    }
}

class Bibliotheque{
    constructor(nom, livres){
        this.nom = nom;
        this.livres = [];
    }

    //méthodes
    ajouterLivre(livre){
        //livre = new Livre;
        this.livres.push(livre); // Ajout du livre à la bibliothèque
        console.log(`Le livre "${livre.titre}" a été ajouté à la bibliothèque.`);
    }

    emprunterLivre(titre){
        emprunter();
        try{

        }catch{

        }
    }

    retournerLivre(titre){
        retourner();
        try{
            
        }catch{

        }
    }

}


// Exemple d'utilisation scénario
const maBibliotheque = new Bibliotheque("Ma Bibliothèque");
const livre1 = new Livre("1984", "George Orwell");
const livre2 = new Livre("Le Gros Petit Prince", "Steven Seagal");

maBibliotheque.ajouterLivre(livre1);
maBibliotheque.ajouterLivre(livre2);

maBibliotheque.emprunterLivre("1984"); // Livre emprunté avec succès.
maBibliotheque.emprunterLivre("1984"); // Déclenche exception livre n'est plus disponible.
maBibliotheque.retournerLivre("1984"); // Livre retourné avec succès.
maBibliotheque.emprunterLivre("198999"); // Déclenche exception livre n'existe pas.


/*Soluce class Livre
class Livre {
    constructor(titre, auteur) {
        this.titre = titre;
        this.auteur = auteur;
        this.disponible = true;
    }

    emprunter() {
        try {
            if (!this.disponible) {
                throw new Error(`Le livre "${this.titre}" n'est pas disponible.`);
            }
            this.disponible = false;
        } catch (error) {
            console.error(error.message);
        }
    }

    retourner() {
        this.disponible = true;
    }
}

//Soluce class biblio
class Bibliotheque {
    constructor(nom) {
        this.nom = nom;
        this.livres = [];
    }

    ajouterLivre(livre) {
        this.livres.push(livre);
    }

    emprunterLivre(titre) {
        try {
            const livre = this.livres.find(unLivre => unLivre.titre === titre);
            // console.log(livre);
            // Si on a pas trouvé le livre, si le find nous a retourné undefined,
            // alors on lève une erreur custom
            if (!livre) {
                throw new Error(`Le livre "${titre}" n'existe pas dans la bibliothèque.`);
            }
            livre.emprunter();
        } catch (error) {
            console.error(error.message);
        }
    }

    retournerLivre(titre) {
        try {
            const livre = this.livres.find(unLivre => unLivre.titre === titre);
            if (!livre) {
                throw new Error(`Le livre "${titre}" n'a jamais été les stocks de la bibliothèque.`);
            }
            livre.retourner();
        } catch (error) {
            console.error(error.message);
        }
    }
}
    */