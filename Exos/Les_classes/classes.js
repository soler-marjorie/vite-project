class Imc{
    constructor(nom, poids, taille){
        this.nom = nom;
        this.poids = poids;
        this.taille = taille;
    }

    getImc(){
        return this.poids/this.taille**2;
    }

    display(){
        console.log(`${this.nom} : ${this.poids}kg, ${this.taille}cm -> a un IMC de : ${this.getImc().toFixed(2)}`);
    }
}

let list = [
    new Imc("Sébastien chabal", 135, 1.7),
    new Imc("Escaladeuse", 45, 1.68),
    new Imc("JOJO", 300, 2),
    new Imc("Gontrand", 90, 1.75),
    new Imc("Colonel Clock", 200, 1.75),
    new Imc("Josiane de la Vega", 99, 1.55)
]

for(let i = 0; i < list.length; i++){
    list[i].display();
}