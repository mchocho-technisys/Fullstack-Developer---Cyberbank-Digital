//Permite rellenar un array con el valor que le pases, el indice donde empexar y el indice donde terminar. Fill cambia el array original
const numbers = [1, 2, 3, 4, 8, 6, 7];

numbers.fill(5, 2, 5);
console.log(numbers);

//Si le pasamos valores negativos comienza del final
numbers.fill(9, -2)
console.log(numbers);
