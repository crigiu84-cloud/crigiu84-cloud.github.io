function stampaRegistrazione() {
    // 1. Prendiamo i valori dai campi dell'HTML
    var cognome = document.getElementById("txtCognome").value;
    var nome = document.getElementById("txtNome").value;
    var cf = document.getElementById("txtCodiceFiscale").value;
    var termini = document.getElementById("termini").checked;
    
    // Controlliamo il sesso
    var maschio = document.getElementById("maschio").checked;
    var femmina = document.getElementById("femmina").checked;

    // 2. Controllo dei Termini (obbligatorio)
    if (termini == false) {
        alert("Errore: devi accettare i termini!");
        return; // Blocca tutto qui
    }

    // 3. Controllo del Codice Fiscale (deve essere lungo 16)
    if (cf.length != 16) {
        alert("Errore: il Codice Fiscale deve avere 16 caratteri!");
        return;
    }

    // 4. Decidiamo se scrivere Sig. o Sig.ra
    var titolo = "";
    if (maschio == true) {
        titolo = "sig.";
    } else if (femmina == true) {
        titolo = "sig.ra";
    } else {
        alert("Errore: seleziona il sesso!");
        return;
    }

    // 5. Se tutto è corretto, mostriamo il messaggio finale
    alert("Gentile " + titolo + " " + cognome + " " + nome + ",\nla ringraziamo per la registrazione.");
}

// Parte per riempire la combo box degli anni in modo semplice
var combo = document.getElementById("combo");
for (var i = 1900; i <= 2008; i++) {
    var opzione = document.createElement("option");
    opzione.value = i;
    opzione.text = i;
    combo.add(opzione);
}