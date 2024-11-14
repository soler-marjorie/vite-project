/*const leTitre = document.querySelector("#mainTitle");
const lesLiens = document.querySelectorAll(".superLien");
lesLiens[0].addEventListener("click", function(){
    leTitre.classList.add("laClasse");
});    
lesLiens[1].addEventListener("click", function(){
    leTitre.classList.remove("laClasse");
});
lesLiens[2].addEventListener("click", function(){
    leTitre.classList.toggle("laClasse");
});
*/


document.addEventListener('click', function(eventClick){
    console.log(eventClick);
    console.log('Les coord : ',eventClick.x, eventClick.y);
    // On Créer une image
    const monImg = document.createElement('img');
    const tailleImg = 300;
    // On rajoute une src à l'image
    // monImg.setAttribute('src', `https://www.stevensegallery.com/${tailleImg}/${tailleImg}`);
    monImg.setAttribute('src', `https://picsum.photos/${tailleImg}/${tailleImg}`);
    // On modifie le type de position de l'image
    monImg.style.position = 'absolute';
    // On modifie la position top de l'image
    monImg.style.top = eventClick.y - tailleImg /2 +'px';
    // On modifie la position left de l'image
    monImg.style.left = eventClick.x -tailleImg /2 +'px';
    //On place l'image fraichement créee dans le body de la page
    document.body.append(monImg);
});