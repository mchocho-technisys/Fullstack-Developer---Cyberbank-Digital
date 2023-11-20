//Permite recortar el array y retornarlo dentro de un nuevo array sin mutar el original
const miArray = [1, 2, 3, 4, 5, 6, 7, 8];

const nuevoArray = miArray.slice(4, 8);

console.log(miArray);
console.log(nuevoArray);