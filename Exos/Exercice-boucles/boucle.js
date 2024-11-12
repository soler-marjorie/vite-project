const lesTxt = document.body.getElementsByTagName("p");
console.log(lesTxt);

const textesTab = Array.from(lesTxt);
console.log(textesTab);

textesTab.map((param)=>{
    param.innerText="OKKKKKK"
    param.style="color:red;"

    param.addEventListener("click", ()=>{console.log("balise cliquable")});
});
