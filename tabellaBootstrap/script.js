// Array globale per memorizzare gli studenti
let studenti = [];

// Riferimenti agli elementi del DOM
const nomeInput = document.getElementById('nome');
const cognomeInput = document.getElementById('cognome');
const etaInput = document.getElementById('eta');
const btnAggiungi = document.getElementById('btnAggiungi');
const corpoTabella = document.getElementById('corpoTabella');

/**
 * Funzione principale per aggiungere uno studente
 */
function aggiungiStudente() {
    const nome = nomeInput.value.trim();
    const cognome = cognomeInput.value.trim();
    const eta = etaInput.value.trim();

    // 1. Controllo compilazione
    if (nome === "" || cognome === "" || eta === "") {
        alert("Attenzione: Compila tutti i campi prima di procedere.");
        return;
    }

    // 2. Creazione oggetto JavaScript
    const nuovoStudente = {
        nome: nome,
        cognome: cognome,
        eta: eta
    };

    // 3. Inserimento nell'array
    studenti.push(nuovoStudente);

    // 4. Aggiorna la tabella e svuota i campi
    mostraStudenti();
    svuotaCampi();
}

/**
 * Funzione mostraStudenti() per aggiornare il corpo della tabella
 */
function mostraStudenti() {
    // Svuota il corpo della tabella
    corpoTabella.innerHTML = "";

    // Scorre l'array studenti
    studenti.forEach((studente, indice) => {
        // Genera dinamicamente la riga
        const riga = document.createElement('tr');

        riga.innerHTML = `
            <td>${studente.nome}</td>
            <td>${studente.cognome}</td>
            <td>${studente.eta}</td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="eliminaStudente(${indice})">
                    Elimina
                </button>
            </td>
        `;

        corpoTabella.appendChild(riga);
    });
}

/**
 * Funzione eliminaStudente(indice)
 * @param {number} indice - Posizione nell'array dello studente da rimuovere
 */
function eliminaStudente(indice) {
    // Rimuove dall'array
    studenti.splice(indice, 1);
    
    // Aggiorna la vista
    mostraStudenti();
}

/**
 * Utility per svuotare gli input
 */
function svuotaCampi() {
    nomeInput.value = "";
    cognomeInput.value = "";
    etaInput.value = "";
    nomeInput.focus(); // Riporta il cursore sul primo campo
}

// Event Listener per il pulsante Aggiungi
btnAggiungi.addEventListener('click', aggiungiStudente);