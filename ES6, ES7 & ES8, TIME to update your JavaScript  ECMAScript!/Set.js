//Parecido a un array solo que todos los valores son únicos
const employeeId = new Set([1, 2, 3, 4, 4]);

//Vemos como el id 4 no se repite
console.log(employeeId);

//Permite iterar
employeeId.forEach((id) => console.log(id));

//Para agregar se usa add
const employeeSet = new Set();

employeeSet.add("Martin");

employeeSet.add("Juan");

console.log(employeeSet);

//Para limpiar se usa clear
employeeId.clear();

//Para eliminar se usa delete
employeeSet.delete("Juan");;

console.log(employeeSet);


