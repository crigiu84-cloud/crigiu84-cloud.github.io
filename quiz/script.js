let mesi = ["GEN", "FEB", "MAR", "APR", "MAG", "GIU", "LUG", "AGO", "SET", "OTT", "NOV", "DIC"];

function riempiMesi() {
    let s = "";
    for (let i = 0; i < mesi.length; i++) {
        s += "<option value='" + mesi[i] + "'>" + mesi[i] + "</option>";
    }
    document.getElementById("selectMese").innerHTML = s;
}
riempiMesi();

function elaboraDati() {
    // 1. Recupero dati anagrafici
    let cognome = document.getElementById("textboxCognome").value.toUpperCase();
    let nome = document.getElementById("textboxNome").value.toUpperCase();
    let giorno = document.getElementById("textboxGiorno").value;
    let mese = document.getElementById("selectMese").value;
    let anno = document.getElementById("textboxAnno").value;

    // 2. Validazione obbligatorietà e data
    if (cognome === "" || nome === "" || giorno === "" || anno === "") {
        alert("Tutti i campi anagrafici sono obbligatori!");
        return;
    }

    if (isNaN(giorno) || giorno < 1 || giorno > 31 || isNaN(anno) || anno.length !== 4) {
        alert("Inserire una data valida (GG/MM/AAAA)!");
        return;
    }

    // Aggiorniamo i campi sulla pagina per vederli maiuscoli
    document.getElementById("textboxCognome").value = cognome;
    document.getElementById("textboxNome").value = nome;

    // 3. Controllo Risposte (Punteggio 1 punto per ogni esatta)
    let punti = 0;

    // Domanda 1 (Text)
    if (document.getElementById("textboxSQL").value.toUpperCase() === "SQL") punti++;

    // Domanda 2 (Select)
    if (document.getElementById("comboBool").value === "2") punti++;

    // Domanda 3 (Radio)
    if (document.getElementById("radioLibrerieDinamiche").checked) punti++;

    // Domanda 4 (Checkbox - Richiede Void E Char)
    let checkV = document.getElementById("checkVoid").checked;
    let checkI = document.getElementById("checkInteger").checked;
    let checkC = document.getElementById("checkChar").checked;
    if (checkV && checkC && !checkI) punti++;

    // Domanda 5 (Text)
    if (document.getElementById("txtBit").value.toLowerCase() === "byte") punti++;

    // 4. Output Esito
    document.getElementById("textboxEsito").value = punti + " punti";

    // 5. Calcolo Codice Test (Punteggio x 10)
    // 3 car cognome, 3 nome, 3 mese, ultime 2 cifre anno
    let codCognome = cognome.substring(0, 3).padEnd(3, "X");
    let codNome = nome.substring(0, 3).padEnd(3, "X");
    let codAnno = anno.substring(2, 4);
    
    let codiceTest = codCognome + codNome + mese + codAnno;
    let punteggioFinale = punti * 10;

    document.getElementById("textboxEsito").value=punti*10;

    document.getElementById("txtPunteggio").value=cognome+nome+giorno+mese+anno+punti*10;
}

function cancella() {
    location.reload(); // Il modo più veloce per pulire tutto
}
