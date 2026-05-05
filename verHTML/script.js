function generaCampi() {
            let num = parseInt(document.getElementById("numPasseggeri").value);
            let container = document.getElementById("containerPasseggeri");
            container.innerHTML = ""; // Svuota il contenitore

            for (let i = 1; i <= num; i++) {
                container.innerHTML += `
                    <div class="passeggero-block" style="margin-bottom: 15px;">
                        <h3>Passeggero ${i}</h3>
                        <label>Nome:</label>
                        <input type="text" class="txtNome"><br><br>
                        <label>Cognome:</label>
                        <input type="text" class="txtCognome">
                    </div>
                `;
            }
        }

function continua() {
    let nome= document.getElementById("txtNome").value;
    console.log("nome messo");
    let cognome= document.getElementById("txtCognome").value;
    console.log("cognome messo");

    if (nome.length < 3 || cognome.length < 3) {
        alert("Errore: Nome e Cognome devono avere almeno 3 caratteri!");
        return; 
    }

    if(nome[0]< "A" || nome[0] > "Z" || cognome[0]< "A" || cognome[0] > "Z") {
        alert("INIZIALI MAIUSCOLE");
        return;
    }

    if (!soloLettere(nome) || !soloLettere(cognome)) {
        alert("Errore: Nome e Cognome devono contenere solo lettere!");
        return;
    }

    setCookie("Nome",nome,1);
    setCookie("Cognome",cognome,1);

    window.location.href="pagina2.html";
}

function soloLettere(stringa) {
    for (let i = 0; i < stringa.length; i++) {
        let char = stringa.charAt(i).toLowerCase();      
        if (char < "a" || char > "z") {           
            return false
        }
    }
    return true;
}

let citta=["Milano","Bergamo","Brescia","Como","Cremona","Lecco","Lodi","Mantova","Monza","Pavia","Sondrio","Varese"];

function conferma() {
    let partenza=document.getElementById("comboPartenza").value;
    console.log("partenza selezionata: "+partenza);
    let destinazione=document.getElementById("comboDestinazione").value;
    console.log("destinazione selezionata: "+destinazione);

    if(partenza==destinazione) {
        alert("IMPOSSIBILE CONFERMARE, PARTENZA E DESTINAZIONE NON POSSONO ESSERE UGUALI!");
        return;
    }else if(partenza=="") {
        alert("IMPOSSIBILE CONFERMARE, INSERIRE LA PARTENZA");
        return;
    }else if(destinazione=="") {
        alert("IMPOSSIBILE CONFERMARE, INSERIRE LA DESTINAZIONE");
        return;
    }else {
        setCookie("partenza",partenza,1);
        setCookie("destinazione",destinazione,1);
    }

    window.location.href="pagina3.html";
}

function conferma2() {
    let giorno = parseInt(document.getElementById("txtGiorno").value);
    let mese = document.getElementById("comboMesi").selectedIndex; 
    let anno = parseInt(document.getElementById("txtAnno").value);

    let dataInserita = new Date(anno, mese, giorno);
    let oggi = new Date();

    let dataMax = new Date();
    dataMax.setMonth(dataMax.getMonth() + 1);

    if (dataInserita < oggi || dataInserita > dataMax) {
        alert("INSERIRE UNA DATA VALIDA!");
        return;
    }

    setCookie("Giorno", giorno, 1);
    setCookie("Mese", mese + 1, 1);
    setCookie("Anno", anno, 1);

    window.location.href = "Riepilogo.html";
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

    document.getElementById("demo").innerHTML = s;
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