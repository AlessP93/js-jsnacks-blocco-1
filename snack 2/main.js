const nameOne = prompt("Inserisci un nome?");
const nameTwo = prompt("Inserisci un nome?");


if (nameOne.length > nameTwo.length) {
    console.log(nameOne, nameTwo);
} else if (nameTwo.length > nameOne.length) {
    console.log(nameTwo, nameOne);
} else {
    console.log("stessa lunghezza");
}