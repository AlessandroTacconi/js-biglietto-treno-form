'use strict';

// Scrivere un programma che chieda all’utente:
// - Il numero di chilometri da percorrere
// - Età del passeggero
// const kmPasseggero = parseInt(prompt('Quanti km devi percorrere?'));
// const etaPasseggero = parseInt(prompt('Quanti anni hai?'));

const kmPasseggero = document.getElementById('km');
// const etaPasseggero = document.querySelector('.eta-passeggero');
const etaPasseggero = document.getElementById('eta');
const bottoneGenera = document.getElementById('genera');
const bottoneReset = document.getElementById('reset');
const nomeCognome = document.getElementById('nome-cognome');
const biglietto = document.getElementById('biglietto');
const nomePasseggero = document.getElementById('nome-passeggero');
const offerta = document.getElementById('offerta');
const carrozza = document.getElementById('carrozza');
const codice = document.getElementById('codice');
const prezzo = document.getElementById('prezzo');

console.log(nomeCognome.value);

bottoneGenera.addEventListener('click', function () {
  const prezzoKm = kmPasseggero.value * 0.21;
  const prezzoMinori = parseFloat(prezzoKm * 0.8);
  const prezzoOver65 = parseFloat(prezzoKm * 0.6);

  console.log(`Km da percorrere: ${kmPasseggero.value} Km`);
  console.log(`Il passeggero è: ${etaPasseggero.value}`);

  if (etaPasseggero.value === 'minorenne') {
    console.log(`La tariffa da pagare è di: ${prezzoMinori} €`);
    prezzo.innerHTML = `${prezzoMinori.toFixed(2)} €`;
  } else if (etaPasseggero.value === 'over') {
    console.log(`La tariffa da pagare è di: ${prezzoOver65} €`);
    prezzo.innerHTML = `${prezzoOver65.toFixed(2)} €`;
  } else {
    console.log(`La tariffa da pagare è di: ${prezzoKm} €`);
    prezzo.innerHTML = `${prezzoKm.toFixed(2)} €`;
  }

  nomePasseggero.innerHTML = nomeCognome.value;
  offerta.innerHTML = etaPasseggero.value;
  carrozza.innerHTML = Math.floor(Math.random() * 12) + 1;
  codice.innerHTML = Math.floor(Math.random() * 90000) + 10000;

  biglietto.classList.remove('hidden');
});

bottoneReset.addEventListener('click', function () {
  kmPasseggero.value = '';
  etaPasseggero.value = '';
  nomeCognome.value = '';

  biglietto.classList.add('hidden');
});

// <Creare due prompt per le info>

/* Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
 */

// - Il prezzo del biglietto è definito in base ai km (0.21 € al km)

// <Calcolare prezzo al kilometro>

// - Va applicato uno sconto del 20% per i minorenni
// - Va applicato uno sconto del 40% per gli over 65.

// <Calcolare condizioni sconti sconti>

/* L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
Questo richiederà un minimo di ricerca.
*/

/*
Il numero di chilometri da percorrere
Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo, come da screenshot allegato. Il recap dei dati e l’output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).
*/
