//Sirve para crear un array de lo que le pases
const letters = Array.from("Martin");
console.log(letters);

//Tambien contempla expreciones matematicas
const sum = Array.from(`${3+5}49`);
console.log(sum);

//Permite un segundo parametro para manipular el listado
const text1 = "Hello";
const text2 = "My name is Martin";
const text3 = "I am 23 years old and i have a dog";

const lines = Array.from([text1,text2,text3], (line) => `<li>${line}</li>`);
console.log(lines);