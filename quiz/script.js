let mesi= ["GEN", "FEB", "MAR", "APR", "MAG", "GIU", "LUG", "AGO", "SET", "OTT", "NOV", "DIC"];

function riempiMesi() {
    let s="";
    for(let i=0; i<mesi.length;i++) {
        s+="<option>" + mesi[i] + "</option>";
    }

    document.getElementById("selectMese").innerHTML=s;
}

riempiMesi();

let punteggio=0;
let errate=0;
let giuste=0;
let risposte= ["SQL", "2", "Dinamiche", "VoidChar", "byte"];

function elaboraDati() {
    let cognome= document.getElementById("textboxCognome").value;
    if(cognome==null) {
        console.log("inserisci il cognome!");
    }

    let nome= document.getElementById("textboxNome").value;
    if(nome==null) {
        console.log("inserisci il nome!");
    }

    let giorno= document.getElementById("textboxGiorno").value;
    if(giorno<0 || giorno>31) {
        console.log("giorno errato!");
    }

    let mese= document.getElementById("selectMese");

    let anno=getElementById("textboxAnno").value;
    if(anno<1938||anno>2026 || anno==null) {
        console.log("inserisci un anno di nascita valido!");
    }

    let risposta_1=document.getElementById("textboxSQL").value;
    if(rispposta_1!=risposte[0]) {
        errate++;
    }else if(risposta_1==null) {
        console.log("inserire la risposta 1");
    }else if(risposta_1==risposte[0]) {
        giuste++;
    }

    let risposta_2
    if(risposta_2!=risposte[0]) {
        errate++;
    }else if(risposta_2==null) {
        console.log("inserire la risposta 1");
    }else if(risposta_2==risposte[0]) {
        giuste++;
    }

    
}