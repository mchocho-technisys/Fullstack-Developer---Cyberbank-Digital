//Nuevas prop del objeto Object

//Values, crea un array con los valores del objeto
const footballer = {
    name: "Wayne Rooney",
    position: "Forward",
    club: "Manchester United",
    scoringAverage: 1.2,
}

const footballerValues = Object.values(footballer);
console.log(footballerValues);

//Entries, crea un array de arrays por cada prop del objeto
const footballerEntries = Object.entries(footballer);
console.log(footballerEntries);