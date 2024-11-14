// TODO 1: Récupérer le textarea dans une variable zoneTxt
// TODO 2: Récupérer la div dans une variable zoneRender
// TODO 3: Dès qu'on arrive sur la page, pré remplir le textarea avec ce que l'on récupère dans le localStorage
// TODO 4: Si zoneTxt.value est défini, alors remplir la div avec ce qu'on récupère dans le localStorage
// TODO 5: Détecter ce que tape l'utilisateur dans le textarea
// TODO 6: Enregistrer ce que tape l'utilisateur dans le localStorage sous le nom "monSuperTexte"
// TODO 7: Afficher ce que tape l'utilisateur traduit en marked dans la div

const zoneTxt = document.querySelector("textarea");
const zoneRender = document.querySelector("#formRender");
// Dès qu'on arrive sur la page,
//On va pré remplir le textarea avec ce que l'on récupère dans le localStorage
zoneTxt.value = localStorage.getItem('monSuperTexte');
//Si zoneTxt.value est définit alors on rempli la Div avec ce qu'on récupère dans le local storage
if(zoneTxt.value){
//    zoneRender.innerText = localStorage.getItem('monSuperTexte');
   zoneRender.innerHTML = marked(localStorage.getItem('monSuperTexte'));
};
//On détecte ce que tape l'utilisateur dans le textarea
zoneTxt.addEventListener("keyup", function() {
//On enregistre ce que tape l'utilisateur dans le localStorage sous le nom "monSuperTexte"
localStorage.setItem('monSuperTexte',zoneTxt.value);
//On affiche ce que tape l'utilisateur traduit en marked dans la div     
//    zoneRender.innerHTML =marked(zoneTxt.value);
   zoneRender.innerHTML =DOMPurify.sanitize(marked(zoneTxt.value));
//    zoneRender.innerHTML =marked(zoneTxt.value);
});