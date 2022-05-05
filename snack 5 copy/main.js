// Inserisci un numero
let numero = Number(promt("Inserisci un numero"));

// SE è pari stampa il numero
if (numero % 2 === 0) {
    console.log(numero);
// ALTRIMENTI se è dispari stampa il numero successivo
} else {
    numero ++;
    console.log(numero) // o anche console.log(numero) + 1
}