let write = document.getElementById('texte');
let recup ="";
let receveur = document.getElementById('receveur');

write.addEventListener("keyup", ()=>{
    recup = write.value;
    //console.log(recup);
    receveur.innerText = recup;

    let btn = document.getElementById('submit');
    if(recup.length>=5){
        btn.disabled = true;
        console.log("bloquer");
    }
})
