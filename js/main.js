// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà;
// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome;
// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

var studente = {
  "nome": "Riccardo",
  "cognome": "Ferrari",
  "eta": 27
};
for (key in studente) {
  studente[key];
  console.log(studente[key]);
};

var arrayStudenti = [
  {
    "nome": "Michele",
    "cognome": "Farina",
    "eta": 24
  },
  {
    "nome": "Stefano",
    "cognome": "Roselli",
    "eta": 34
  },
  {
    "nome": "Marta",
    "cognome": "Berteselli",
    "eta": 21
  },
  {
    "nome": "Paolo",
    "cognome": "Bosisio",
    "eta": 23
  },
];

for (var i = 0; i < arrayStudenti.length; i++) {
  var nome = arrayStudenti[i].nome;
  var cognome = arrayStudenti[i].cognome;
  console.log(nome);
  console.log(cognome);
}

var nomeUtente = prompt("inserisci nome");
var cognomeUtente = prompt("inserisci cognome");
var etaUtente = parseInt(prompt("inserisci età"));

studente.nome = nomeUtente;
studente.cognome = cognomeUtente;
studente.eta = etaUtente;


arrayStudenti.push(studente);
