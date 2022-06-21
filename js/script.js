
/* TRACCIA:
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va stampato in pagina forma umana (con massimo due decimali, per indicare centesimi sul prezzo)
*/



// const firstName = prompt("Qual'e' il tuo nome?", 'Teacher')
// const nome = document.getElementById('nome-utente');
// nome.innerHTML = firstName

// const lastName = prompt("Qual'e' il tuo cognome?", 'Boolean')
// const cognome = document.getElementById('cognome-utente');
// cognome.innerHTML = lastName

// const region_a = prompt("Da dove parti? ", 'Lazio')
// const partenza = document.getElementById('region-start');
// partenza.innerHTML = region_a

// const region_b = prompt('Dove vuoi arrivare?', "Lombardia")
// const arrivo = document.getElementById('region-arrival');
// arrivo.innerHTML = region_b

/*
1- RECUPERO ELEMENTO NEL MIO FOGLIO HTML
2- PROMPT DURATA VIAGGIO
3- PROMPT ETA' UTENTE
4- CALCOLO PREZZO BIGLIETTO IN BASE AI KM DA PERCORRERE (0,21 euro al km)
5- CALCOLA SCONTO 20% SE MINORE DI 18 ANNI
6- CALCOLA SCONTO 40% SE MAGGIORE DI 65 ANNI
7- STAMPA IL RISULTATO IN PAGINA (CON MATH.ROUND PER AVERE AL MASSIMO DUE DECIMALI)
*/

// PRIMO PROMPT, KM DA PERCORRERE

const kilometers = parseInt(prompt('Quanti kilometri devi percorrere?', "379"));
console.log('I kilometri da percorrere sono ' + kilometers);

let prezzo = kilometers * 0.21

// SECONDO PROMPT, ETA'

const userAge = parseInt(prompt('Quanti anni hai?'))
console.log("l'eta' che hai scelto e' " + userAge);

//PRIMA CONDIZIONE SCONTO MINORENNI

if (userAge < 18) {
    prezzo = (prezzo - prezzo * 0.2).toFixed(2);
    console.log('lo sconto applicato e ' + prezzo);
} else if (userAge >= 65) {
    prezzo = (prezzo - prezzo * 0.4).toFixed(2);
}

//STAMPO IN PAGINA

const discountTicket = document.getElementById('difference');
discountTicket.innerHTML = prezzo;
