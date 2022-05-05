// Generatore di "nomi cognomi" casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi, 
// e da queste vuole generare una falsa lista di invitati con nome e cognome.

// creo una lista vuota
// --------------------------const fullName = [];    commento giusto
 
// genero nomi e cognomi
const nomi = ["ale", "matteo","luigi","simone"];
const cognomi = ["rossi", "bianchi","verdi","gialli"];
// --------------------------console.log(fullName.length)      commento giusto

// genero un nome e cognome random
for (let i = 0; i < 4; i++) {
    
    const nomeRandom = Math.floor(Math.random() * 4);
    const cognomeRandom = Math.floor(Math.random() * 4);
    
    console.log(nomi[nomeRandom], cognomi[cognomeRandom]);
    
}

   