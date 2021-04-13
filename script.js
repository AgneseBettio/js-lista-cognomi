// 1. chiedi all’utente il cognome
var userSurname = prompt("inserisci il tuo cognome");
console.log(userSurname);

// 2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
var surnameList = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];
console.log(surnameList);

switch (userSurname) {
    case "Bianchi":
    case "Neri":
    case "Rossi":
    case "Verdi":
    case "Gialli":
        alert("il cognome da lei inserito risulta già nel sistema")
        break;
    default: surnameList.push(userSurname);
    console.log(surnameList);
}

// 3. stampa la lista ordinata alfabeticamente
surnameList.sort();
console.log(surnameList);

// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova

var surnamePosition [];
