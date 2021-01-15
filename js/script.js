// Oggetti
// - Creare un oggetto che descriva uno studente
// con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso il for in tutte le
// proprietà.
// - Creare un array di oggetti di studenti. Ciclare su
// tutti gli studenti e stampare per ognuno nome e
// cognome
// - Dare la possibilità all’utente attraverso 3 prompt
// di aggiungere un nuovo oggetto studente
// inserendo nell’ordine: nome, cognome e età.


var studente={
  'nome': 'Mario',
  'cognome':'Rossi',
  'eta':45
};
for (var key in studente){
  console.log(studente[key]);
};

var studenti=[
  {
    'nome':'Mario',
    'cognome':'Rossi'
  },
  {
    'nome':'Luca',
    'cognome':'Bianchi'
  },
  {
    'nome':'Luigi',
    'cognome':'Verdi'
  },
];
for (var i=0; i<studenti.length;i++){
  console.log(studenti[i]);
  for(var k in studenti[i]){
    console.log(k +' '+ studenti[i][k]);
  }
}
// var studenti={
//   ['mario rossi'],
//   ['luigi bianchi'],
//   ['paolo verdi']
// };
// for (var i=0; i<studenti.length;i++){
//   for (var j=0; j<studenti[i].length; i++){
//     for (var y=0; j<studenti[j].length; i++){
//       console.log(studenti[i][j][y]);
//     }
//   }
// }
