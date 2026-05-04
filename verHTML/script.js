function continua() {
    let nome= document.getElementById("txtNome").value;
    console.log("nome messo");
    let cognome= document.getElementById("txtCognome").value;
    console.log("cognome messo");

    if(nome[0]< "A" || nome[0] > "Z" || cognome[0]< "A" || cognome[0] > "Z") {
        alert("INIZIALI MAIUSCOLE")
    }

    if(nome.length<3 || cognome.length<3) {
        alert("ALMENO 3 CARATTERI")
    }

    for(let i=0;i<nome.length;i++) {
        if(nome[i]<"a" || nome[i]>"z" || nome[i]<"A" || nome[i]>"Z") {
            alert("NOME INVALIDO (come bonfanti)");
        }
    }
    if(nome == null) {
        alert("INSERIRE IL CAMPO NOME!");
        return;
    }
    if(cognome == null) {
        alert("INSERIRE IL CAMPO COGNOME!");
        return
    }

    if(nome==null&&cognome==null) {
        alert("ISNERIRE I CAMPI PER PROCEDERE");
        return
    }

    setCookie("Nome",nome,1);
    setCookie("Cognome",cognome,1);

    window.location.href="pagina2.html";
}

let citta=["Milano","Bergamo","Brescia","Como","Cremona","Lecco","Lodi","Mantova","Monza","Pavia","Sondrio","Varese"];

function conferma() {
    let partenza=document.getElementById("comboPartenza").value;
    console.log("partenza selezionata: "+partenza);
    let destinazione=document.getElementById("comboDestinazione").value;
    console.log("destinazione selezionata: "+destinazione);

    if(partenza==destinazione) {
        alert("IMPOSSIBILE CONFERMARE, PARTENZA E DESTINAZIONE NON POSSONO ESSERE UGUALI!");
    }else if(partenza==null) {
        alert("IMPOSSIBILE CONFERMARE, INSERIRE LA PARTENZA");
    }else if(destinazione==null) {
        alert("IMPOSSIBILE CONFERMARE, INSERIRE LA DESTINAZIONE");
    }else {
        setCookie("partenza",partenza,1);
        setCookie("destinazione",destinazione,1);
    }

    window.location.href="pagina3.html";
}

function conferma2() {
    let giorno=document.getElementById("txtGiorno").value;
    let mese=document.getElementById("comboMesi").value;
    let anno=document.getElementById("txtAnno").value;

    giorno=parseInt(giorno);
    console.log("parse giorno");
    anno=parseInt(anno);
    console.log("parse mese");

    let giornoOggi=new Date().getDate();
    let meseOggi= new Date().getMonth()+1;
    let annoOggi=new Date().getFullYear();

    if(giorno<0||giorno>31) {
        alert("IMPOSSIBILE INSERIRE UN GIORNO INVALIDO!");
    }

    if(anno==annoOggi&&mese==meseOggi&&giorno>=giornoOggi) {
        setCookie("Giorno",giorno,1);
        setCookie("Mese",mese,1);
        setCookie("Anno",anno,1);
    }
   
    else if(anno==annoOggi&&mese==meseOggi+1) {
        setCookie("Giorno",giorno,1);
        setCookie("Mese",mese,1);
        setCookie("Anno",anno,1);
    }else {
        alert("INSERIRE UNA DATA VALIDA (DATA DI OGGI O SUPERIORE FINO AL GIORNO DI OGGI DEL EMSE PROSSIMO!");
        return;
    }

    window.location.href="Riepilogo.html";
}


function caricaRiepilogo() {
    let Nome=getCookie("Nome");
    let cognome= getCookie("Cognome")
    let partenza= getCookie("partenza");
    let destinazione= getCookie("destinazione");
    let giorno=getCookie("Giorno");
    let mese=getCookie("Mese");
    let anno=getCookie("Anno");

    let s="";

    s+="<p>Passeggero: " + nome + "," + cognome + "</p> <br>";
    s+= "<p>città di partenza: " + partenza + "</p> <br>";
    s+= "<p>città arrivo: " +destinazione + "</p> <br>";
    s+= "<p> data: " + giorno + "/" + mese + "/" + anno + "</p> <br>";

    document.getElementById("demo").innerHTML = text;
}
function tornaPagIniziale() {
    window.location.href="pagina1.html";
}
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }