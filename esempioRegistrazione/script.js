document.addEventListener("DOMContentLoaded", function () {
    //creo le due liste selezionando tutti gli elementi con classe hobby e name sesso
    const hobbies = document.querySelectorAll(".hobby");
    const radios = document.getElementsByName("sesso");

    //per ogni elemento di hobbies e radio button aggiungo l'evento change
    for(let i=0; i<hobbies.length;i++) {
        hobbies[i].addEventListener("change", stampa);
    }

    for(let i=0; i<radios.length;i++) {
        radios[i].addEventListener("change", stampa);
    }

    //metto le checkbox seleziomnate in una lista e il radio selezionato in una variabile e gli stampo
    function stampa() {
        let selezionati= [];

        for(let i=0; i<hobbies.length;i++) {
            if(hobbies[i].checked) {
                selezionati.push(hobbies[i].value);
            }
        }

        let sessoSelezionato= "";
        for(let i=0;i<radios.length;i++) {
            if(radios[i].checked) {
                sessoSelezionato=radios[i].value;
            }
        }

        console.log("hobbies: ", selezionati);
        console.log("Sesso: ", sessoSelezionato);
    }
});

let menu= document.getElementById("menu");
let annoCorrente= new Date().getFullYear();
//prendo il valore, lo stampo e stampo il testo dell'elemento selezionato
function stampaSelezionato() {
    let selezionato= menu.value;
    console.log(selezionato);
    let testo= menu.options[menu.selectedIndex].text;
    console.log(testo);
}

function riempiConAnni() {
    let html="";
    for(let i=1990;i<=annoCorrente;i++) {
        html += "<option value=" + i + ">" + i + "</option>";
    }
    menu.innerHTML = html;
}

let txt1= document.getElementById("textBox1");