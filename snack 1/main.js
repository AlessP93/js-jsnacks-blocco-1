// L’utente inserisce due numeri in successione, con due prompt. 
// Il software stampa il maggiore.

const numberOne = Number(prompt("Inserisci un numero?"));
const numbertwo = Number(prompt("Inserisci un numero?"));
console.log(numberOne, numbertwo)

if (numberOne > numbertwo) {
    console.log(numberOne)
} else {
    console.log(numberTwo)
}