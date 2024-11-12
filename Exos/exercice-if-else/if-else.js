let notes = [10,18,13];

function moyenne(arr){
    let somme = 0;
    let moy = 0;
    let result = "";

    for(let i = 0; i < arr.length; i++){
        somme += arr[i]; 
    }
    moy = somme/arr.lenght;

    if(moy>=15){
        result="très bien";
    }else if(moy>=10){
        result="assez bien";
    }else{
        result="refus";
    }

    return result;
}

console.log(moyenne(notes));