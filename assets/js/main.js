/*

Consegna:

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
 
*/


// Variabile contente il fattore di moltiplicazione del prezzo
const priceFactor = .21;
// Variabili contenti gli sconti per i minorenni e gli anziani
const discountUnder18 = .2;
const discountOver65 = .4;
let price;

const distance = prompt('Per favore inserire la distanza in km da percorrere.');
const userAge = prompt('Per favore inserire la propria età');

// Check dei dati inseriti
// se viene inserita una distanza negativa, manda un alert
if(distance <= 0) alert("ERRORE: Iserire una distanza corretta.");
// se viene inserita una età negativa, manda un alert
else if(userAge < 0) alert("ERRORE: Inserire l'età corretta.")
// altrimenti puoi continuare
else{
    // calcolo il prezzo reale
    price = (distance * priceFactor);
    // se l'utente è minorenne..
    if(userAge < 18){
        // calcolo il prezzo applicando lo sconto per minorenni
        price *= discountUnder18;
    
    } else if(userAge > 65){ // altrimenti, se è un anziano
        // calcolo il prezzo applicando lo sconto per anziani
        price *= discountOver65;
    }
    // se non è uno dei casi precedenti posso stampare il risultato senza sconti
    // il risultato lo stampo normalizzato con due decimali
    //console.log(`Il prezzo del tuo biglietto sarà €${price.toFixed(2)}`);
    const resultBox = document.getElementById("result");
    
    console.log(resultBox);
    resultBox.innerHTML = `Il prezzo del tuo biglietto sarà €${price.toFixed(2)}`;
}