function cambiaPrezzo1(){
    let quantita = document.getElementById("inputMouse").value;
    if(quantita > 20){
        let quantita = document.getElementById("inputMouse").value = 20;
    }
    else if(quantita < 0){
        let quantita = document.getElementById("inputMouse").value = 0;
    } else{
        let prezzoTotale = quantita*16;
        document.getElementById("costoTotaleMouse").innerHTML = prezzoTotale;
    }
}

function cambiaPrezzo2(){
    let quantita = document.getElementById("inputTastiera").value;
    if(quantita > 20){
        let quantita = document.getElementById("inputTastiera").value = 20;
    }
    else if(quantita < 0){
        let quantita = document.getElementById("inputTastiera").value = 0;
    } else{
        let prezzoTotale = quantita*25;
        document.getElementById("costoTotaleTastiera").innerHTML = prezzoTotale;
    }
}

function cambiaPrezzo3(){
    let quantita = document.getElementById("inputStampante").value;
    if(quantita > 20){
        let quantita = document.getElementById("inputStampante").value = 20;
    }
    else if(quantita < 0){
        let quantita = document.getElementById("inputStampante").value = 0;
    } else{
        let prezzoTotale = quantita*350;
        document.getElementById("costoTotaleStampante").innerHTML = prezzoTotale;
    }
}

function cambiaPrezzo4(){
    let quantita = document.getElementById("inputScanner").value;
    if(quantita > 20){
        let quantita = document.getElementById("inputScanner").value = 20;
    }
    else if(quantita < 0){
        let quantita = document.getElementById("inputScanner").value = 0;
    } else{
        let prezzoTotale = quantita*200;
        document.getElementById("costoTotaleScanner").innerHTML = prezzoTotale;
    }
}

function elaboraOrdine(){

    
    let p1 = parseFloat(document.getElementById("costoTotaleMouse").innerText) || 0;
    let p2 = parseFloat(document.getElementById("costoTotaleTastiera").innerText) || 0;
    let p3 = parseFloat(document.getElementById("costoTotaleStampante").innerText) || 0;
    let p4 = parseFloat(document.getElementById("costoTotaleScanner").innerText) || 0;
    let prezzoTotale = p1+p2+p3+p4;
    document.getElementById("costoTotale").innerHTML = prezzoTotale;
}

function visualizzaStringaFinale(){
    let email = document.getElementById("email").value;
    let pagamento = document.getElementById("menuPagamento").value;
    
    // CORREZIONE: Usa innerText invece di value
    let prezzo = document.getElementById("costoTotale").innerText;

    document.getElementById("stringaFinale").innerHTML = 
        "Grazie per il suo ordine di " + prezzo + "€, il pagamento avverrà tramite " + 
        pagamento + ". Riceverà notifiche all’indirizzo " + email;
}