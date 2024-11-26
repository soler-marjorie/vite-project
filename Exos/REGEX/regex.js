let form = document.querySelector('form');

let email = document.getElementById('regexEmail');
let password = document.getElementById('regexPassword');
let button = document.getElementById('submitBtn');

// La regex du mail (on va utiliser test)
const regex = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/; 

// et on va se faire 2 regex pour le mot de passe (on va utiliser match)
// une pour check si le mdp a bien un chiffre 
// une pour checker si le mdp a bien un caractère special 
const charDecimal = /\d/;
const charSpecial = /[$&@!]/;


email.addEventListener('keyup', ()=>{
    if(!regex.test(email.value)){
        email.style = "background-color : red";
        console.log("Email non valide");
    }else if(regex.test(email.value)){
        email.style = "background-color : green";
    }
})

//Si le mot de passe est trop court alors message d'erreur
//Si le message plus long -> ok mais
// -> vérifier les caractère spéciaux et chiffre dans le mdp

password.addEventListener('keyup', ()=>{
    if(!password.value.match(charDecimal != null)){
        if(password.length < 10 ){
            password.style = "background-color : red";
            console.log("oups pas assez de caractère");
        }
    }
    
})



//soluce regex pour le form
const loginInput = document.querySelector('#exampleInputEmail1');
 console.log(loginInput);
 const passwordInput = document.querySelector('#exampleInputPassword1');
 const userMessage = document.querySelector('#userMessage');

 loginInput.addEventListener('keyup',()=>{ 
  // Ajoute un écouteur d'événements pour détecter les frappes de touches sur le champ de saisie de l'email
  const regexMail = /^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/; 
  // Définit une expression régulière pour valider le format de l'email
  if(regexMail.test(loginInput.value)){ 
    loginInput.style.backgroundColor = 'lightgreen'; 
    // Change la couleur de fond en rouge si l'email est invalide
  }
  else{  // Vérifie si la valeur saisie ne correspond pas à l'expression régulière

    loginInput.style.backgroundColor = 'red'; // Change la couleur de fond en vert
  }
 })

 passwordInput.addEventListener('keyup',()=>{
    const charDecimal = /\d/;
    const charSpecial = /[$&@!]/;
    let errorMessage ='';
    // Si MDP <6 alors dans errormessage on cumule une <li></li> (trop court)
    // Sinon Si MDP >8 alors dans errormessage on cumule une <li></li> (trop long)
    // Si la value du passWord ne match pas la regex decimale alors on cumule une <li></li> (faut un chiffre)
    // etc ... meme système pour les autres cas 
    // On peut aussi faire un truc genre si erroMessage est vide alors c'est tout bon 
    if(passwordInput.value.length<6){
      errorMessage+='<li>Le Mot de passe trop COURT</li>'
    }
    else if(passwordInput.value.length>8){
      errorMessage+='<li>Le Mot de passe trop LONG</li>'
    }
  
    if(!passwordInput.value.match(charDecimal)){
      errorMessage+='<li>Le Mot de passe doit contenir 1 chiffre</li>'
    }
    if(!passwordInput.value.match(charSpecial)){
      errorMessage+='<li>Le Mot de passe doit contenir 1 caractère spécial (@,&,!,$,)</li>'
    }
    if(errorMessage!==''){
      userMessage.innerHTML = `le mot de passe est : <ul>${errorMessage}</ul>`;
      userMessage.style.border ='5px solid red'
    }
    else{
      userMessage.innerHTML = 'Le mot de passe est valide ! 👍';
      userMessage.style.border ='5px solid green'
    }
})