//console.log(obrisiDugmad);

//1. TIP - IZVRSNA FUNKCIJA
function menjanjeBoje(boja) {
    let obrisiDugmad = document.getElementsByClassName("obrisi");
    for (const dugme of obrisiDugmad) {
        dugme.style.backgroundColor = boja;
    }
}

//menjanjeBoje("green");

//2. TIP - ARROW FUNKCIJA
let menjanjeBojeA=(boja)=>{
    let obrisiDugmad = document.getElementsByClassName("obrisi");
    for (const dugme of obrisiDugmad) {
        dugme.style.backgroundColor = boja;
    }
}

//menjanjeBojeA("blue");

let menjanjeBojeB=(boja)=>Array.from(document.getElementsByClassName("obrisi")).forEach(dugme=> dugme.style.backgroundColor=boja);
menjanjeBojeB("purple");

//3. TIP - CALLBACK FUNKCIJA
let obrisiDugmad = document.getElementsByClassName("obrisi");

for (const dugme of obrisiDugmad) {
    dugme.addEventListener("click", function(e) {
//        console.log(this);
//        console.log(this.parentNode);
        let elementZaBrisanje = this.parentNode;
        elementZaBrisanje.remove();
    })
}

function dodajDestinaciju(event){
    event.preventDefault();
    let inputPolje = document.querySelector("#dodaj-destinaciju input");

    let nazivNoveDestinacije = inputPolje.value;

    if(nazivNoveDestinacije) {
        let ul = document.getElementById("lista");
        let noviLi = document.createElement("li");

        noviLi.innerHTML = `<span class="naziv">${nazivNoveDestinacije}</span>
        <span class="obrisi">obriši</span>`;

        ul.appendChild(noviLi);

        inputPolje.value = "";
    }
}
    function pozivCallback(){
        let forma = document.forms["dodaj-destinaciju"];
        forma.addEventListener("submit", dodajDestinaciju);
    }


document.addEventListener("DOMContentLoaded", pozivCallback);