//  !-------------------LES TYPES DE DONNÉES-------------------
// Le type est passé pour chaque définition de variable
// A la compilation, TS vérifiera tous les types qui ne sont
// pas `any` pour vérifier que la valeur qui leur est
// attribuée corresponde bien
// Type number : Représente les nombres, qu'ils soient entiers ou décimaux.
let age: number = 25;

// Type string : Représente les chaînes de caractères, entourées par des guillemets simples ou doubles.
let firstName: string = "Alice";

// Type boolean : Représente une valeur de vérité (true ou false).
let isActive: boolean = true;

// Type array : Un tableau contenant uniquement des nombres ici. Le type des éléments est défini avec "number[]".
let numbers: number[] = [1, 2, 3, 4];

// Type tuple : Un tableau à taille fixe avec des types spécifiques pour chaque position.
let tupleExample: [string, number] = ["Alice", 25];

// Type enum : Définit un ensemble de valeurs nommées qui représentent des constantes (Admin, User, Guest).
enum Role { Admin, User, Guest }
// Utilisation d'une valeur de l'enum. Ici, on choisit le rôle "User".
let userRole: Role = Role.User;

// Type any : Permet de stocker n'importe quel type de valeur. À utiliser avec précaution car il désactive la vérification stricte des types.
let notSure: any = 4;       // Initialement un nombre.
notSure = "string now";     // Maintenant une chaîne. Aucun problème pour TypeScript avec "any".

// Affichage des variables dans la console.
console.log(
  age,           // Affiche : 25
  firstName,     // Affiche : Alice
  isActive,      // Affiche : true
  numbers,       // Affiche : [1, 2, 3, 4]
  tupleExample,  // Affiche : ["Alice", 25]
  userRole,      // Affiche : 1 (l'index correspondant à "User" dans l'enum)
  notSure        // Affiche : "string now"
);