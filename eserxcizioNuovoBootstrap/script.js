let studenti = [];   

function aggiungiStudente() {
    let nome= document.getElementById("nome").ariaValueMax;

    let regexNome= /^[a-zA-Z\s]+$/;
    if(!regexNome.test(nome)) {
        alert("il nome non è valido")
    }
    studenti.push(nome);
    mostraStudenti();
    document.getElementById("nome").value="";
}

function mostraStudenti() {
    let lista= document.getElementById("listaStudenti");
    lista.innerHTML="";
    for(let i=0;i<studenti.lenght;i++) {
        let p= document.createElement("p");
        p.innerHTML=studenti[i];
    }
}