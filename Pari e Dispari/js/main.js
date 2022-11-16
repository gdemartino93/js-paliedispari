let sceltaUser = prompt("pari o dispari?");
// Chiedo di scegliere pari o dispari e poi un numero da 1 a 5


if (sceltaUser == "pari" || sceltaUser == "dispari") {
  let numeroUser = parseInt(prompt("Scegli un numero da 1 a 5!"));
// Controlla se sa scrivere allora prenditi numero
  if ((numeroUser > 5) || (numeroUser < 1)) {
    do {
      alert("Hai inserito un numero non valido!");
      numeroUser = parseInt(prompt("Scegli un numero da 1 a 5!"));
    }
    while ((numeroUser > 5) || (numeroUser < 1));
  }
  // Controllo se sono stati inseriti dei numeri nel rage richiesto


  function generaNr() {
    return parseInt(Math.floor(Math.random() * 5) +1);
  }
  let numeroComputer = generaNr(); // Registriamo in memoria il numero assegnandolo ad una variabile

  somma = numeroUser + numeroComputer; // Sommiamo le due variabili con i numeri

  console.log("Hai scelto " + sceltaUser);
  console.log("Il tuo numero: " + numeroUser);
  console.log("Il numero del computer: " + numeroComputer);
  console.log("La somma è " + somma );
  // Generiamo un numero random da 1 a 5 per il computer
  // E inseriamolo in una funzione

  function pariDispari() {
    if (somma % 2 != 0) {
      somma = "dispari";
    }
    else {
      somma = "pari";
    }
    return somma;
  }
  // Controlliamo se la somma delle due variabili è un numero pari o un numero dispari

  let pariDispariSomma = pariDispari(); // Richiamiamo la funzione e assegnamola ad una variabile per tenerla in memoria
  console.log("è un numero" + pariDispariSomma);

 
  if (sceltaUser == pariDispariSomma) {
    alert("hai vinto")
  }
  else {
    alert("hai perso")
  }
}
else {
  alert("Impara a scrivere coglione!");
  location.reload();
}

 // Dichiariamo chi ha vinto