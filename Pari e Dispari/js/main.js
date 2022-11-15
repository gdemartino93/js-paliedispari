let sceltaUser = prompt("Scegli se vuoi pari o dispari");
// User dichiara se sceglie pari o dispari

let numeroUser = parseInt(prompt("Inserisci un numero da 1 a 5"));
// User inserisce numero da 1 a 5

let numeroPc = generaNr()
// Numero pc viene generato da una funzione "generanr"( che contiene un altra funziona "mathflor") quindi amen.....

let somma = numeroUser + numeroPc;
// fai la somma dei due numeri

let parDispari= pariDispari(somma)
// usa la funzione pariDispari che stabilisce se la variabile somma è pari o dispari

console.log(`il numero dell'user è `+ numeroUser + ` il numero del pc è ` + numeroPc );
console.log(` la somma dei numeri è ` + somma + `ed è ` + parDispari )
console.log(`la scelta dell'user è `+ sceltaUser )
// console log di debug delle varie scelte...rimangono di debug per un futuro lontano :D

if ( parDispari === sceltaUser){   //se il valore pardispari è uguale alla scelta dell'user allora l'user ha vinto
    alert("hai scelto " + sceltaUser + " hai vinto")
}
else{
    alert("hai perso") // altrimenti ha perso
}

function generaNr(){   
    const numeroGenerato=Math.floor((Math.random() * 5) + 1);
    return numeroGenerato;
}
// funzione genera numeri attualmente inutile però amen.

function pariDispari(nrDaInserire){
    if ( nrDaInserire % 2 === 0){
        risultato = "pari"
        return risultato
     
    }
    else{
        risultato = "dispari"
        return risultato
    }
}
// funziona per stabile se numero è pari o dispari....utilissima :D XD lol

