// 1. chiedi all’utente il cognome
var userSurname = prompt("inserisci il tuo cognome");
console.log(userSurname);

// 2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
var surnameList = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
console.log(surnameList);
surnameList.push(userSurname);
console.log(surnameList);


// 3. stampa la lista ordinata alfabeticamente
var sortedSurnameList = surnameList.sort();
console.log(sortedSurnameList);

// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
var printedList = document.getElementById("printed-list");
for (var i = 0; i < sortedSurnameList.length; i++) {
    var checkSurname = sortedSurnameList[i];
    printedList.innerHTML += "<ol>" + sortedSurnameList[i] + "</ol>";
}

var userPosition = sortedSurnameList.indexOf(userSurname) + 1;
console.log(userPosition);
document.getElementById("user-position").innerHTML = "la tua posizione nella lista d'attesa è " + userPosition;