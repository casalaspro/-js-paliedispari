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

// PALINDROMA
// Creare una variabile che riceva un prompt con scritto "Inserire una parola:"
const insertWord = prompt("Inserire una parola:");
// check
//console.log(insertWord);
// Creare una funzione che riceva stringa userString e la confronti con la sua copia invertita
function palindromeCheck(userString){
  const userStringToLow = userString.toLowerCase();
  const reverseArray = Array.prototype.toReversed.call(userStringToLow);
  // console.log(userStringToLow);
  // console.log(reverseArray);
  let reverseString = "";
  // faccio tornare reverseArray una stringa
  for(let i = 0; i<reverseArray.length; i++){
    reverseString += reverseArray[i];
  }
  console.log(reverseString);
  return userStringToLow === reverseString;

  
}
  // si renda minuscola la stringa con il metodo .toLowerCase()
  // variabile const reverseArray = si applichi il metodo .toReversed() (metodo non distruttivo di .reverse())
  // return userString === reverseArray
// Invocare la funzione con il risultato del prompt
// Stampare con console.log() il risultato della funzione

console.log(palindromeCheck(insertWord));


