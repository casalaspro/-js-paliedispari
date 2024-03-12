/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma:
la funzione deve ritornare true se la parola è palindroma
deve ritornare false se la parola non è palindroma
alla fine stampate in console un messaggio per dire all’utente il risultato del controllo

Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
Consigli del giorno
Scriviamo sempre in italiano i passaggi che vogliamo fare
Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
*/

// // PALINDROMA
// // Creare una variabile che riceva un prompt con scritto "Inserire una parola:"
// const insertWord = prompt("Inserire una parola:");

// // Creare una funzione che riceva stringa userString e la confronti con la sua copia invertita
// function palindromeCheck(userString){
//   // si renda minuscola la stringa con il metodo .toLowerCase()
//   const userStringToLow = userString.toLowerCase();
//   // variabile const reverseArray = si applichi il metodo .toReversed() (metodo non distruttivo di .reverse())
//   const reverseArray = Array.prototype.toReversed.call(userStringToLow);
  
//   let reverseString = "";
//   // faccio tornare reverseArray una stringa
//   for(let i = 0; i<reverseArray.length; i++){
//     reverseString += reverseArray[i];
//   }
//   // ritorno il valore booleano dato dal confronto delle due stringhe
//   return userStringToLow === reverseString;

  
// }

// // Invoco la funzione all'interno di console.log con argomento funzione insertWord (la parola inserita dal prompt)
// console.log(palindromeCheck(insertWord));

// PARI E DISPARI

// inserisco in una costante un valore booleano se pari o dispari dall'utente
let userSideString = prompt("Scegliere pari o dispari scrivendo la relativa parola");
let userSideBool;
while(userSideBool === undefined){
if(typeof userSideString === "string"){
  if(userSideString === "pari"){
    userSideBool = true;
  }else if(userSideString === "dispari"){
    userSideBool = false;
  }else{
    userSideString = prompt(`Parola errata, scrivere "pari" o "dispari".`);
  }
}
}
let userNumber = parseInt(prompt("Scegliere un numero da 1 a 5."));
let userNumberCheck = false;
while(userNumberCheck === false){
  if(0<userNumber<6){
    userNumberCheck = true;
  }else{
    userNumber = parseInt(prompt("Scelta errata. Scegliere un numero da 1 a 5."));
  }
}
function getRandomNumber(min, max){
  return parseInt(Math.random()*max+min);
}
console.log(getRandomNumber(1, 5));
// inserisco in una costante ciò che è ricevuto dal prompt (un numero da 1 a 5)
// inserisco in una costante un numero random da 1 a 5 usando una funzione
// creo la costante somma dei due numeri
