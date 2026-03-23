function generaElenco(){
    let s=""; //creo una variabile stringa
    s+="<ul>"; //aggiungo il tag per le liste disordinate
    for(let i=0; i<3;i++) //faccio il for
        s+="<li>Item numero: "+i+"</li>";
    s+="</ul>";
    return s;
}

//prendo dove devo mettere la stringa
const elenco= document.getElementById("prova") 

//metto elenco nell'html e richiamo la funzione
elenco.innerHTML = generaElenco();