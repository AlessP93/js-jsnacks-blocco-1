// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari
// BONUS Crea due array che hanno un numero di elementi diversi Aggiungi elementi all'array che ha meno elementi fino a quando ne avrà tanti quanti l'altro


// creo un array di numeri interi 
let array = [1, 2, 3, 4, 5];
let total = 0;
for (let i = 0; i < 5; i++) {
    // SE gli elementi dentro array sono in posizione dispari
    // ALLORA li sommo
    if (i % 2 === 1) {
        total = total + array[i];
    }
    //ALTRIMENTI SE
    console.log(total);
    
}




