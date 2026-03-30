//seleziono tutti i taa di classe titolo e gli asssegno l'evento del click
function inizializzaParagrafi() {
    let titoli= document.querySelectorAll(".titolo"); //lista di .titolo

    for(let i=0; i<titoli.length;i++) {
        titoli[i].addEventListener("click", gestisciClickTitolo);
    }
}

function gestisciClickTitolo(){
    let contenuto=this.nextElementSibling;
    if(contenuto.classList.contains("visible")) {
        contenuto.classList.remove("visible"); //torno a .contenuto che è nascosto
    }else {
        let tuttiIContenuti= document.querySelectorAll(".contenuto");
        for(let i=0;i<tuttiIContenuti.length;i++) {
            tuttiIContenuti[i].classList.remove("visible"); //rimuovo il visible
        }
        contenuto.classList.add("visible")
    }
}

document.addEventListener("DOMContentLoaded",inizializzaParagrafi);

