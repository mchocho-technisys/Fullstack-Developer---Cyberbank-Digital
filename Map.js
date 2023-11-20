//Map permite crear objetos de clave valor, con mejor protección que creando el objeto a mano y con metodos integrados
const contacts = new Map();

contacts.set("123" , "Juan");
contacts.set("456" , "Pedro");
contacts.set("789" , "Luis");

console.log(contacts.get("789"));

//También permite utilizar una función como hey, no se cual seria la uilidad pero se puede
const helloWorld = () => {
    console.log("Hello World!");
};

contacts.set(helloWorld, "Martin");
console.log(contacts.get(helloWorld));

//Para el largo se usa el size
console.log(contacts.size);

//Se pueden iterar, tambien con .forEach
for (value of contacts) {
    console.log(value);
};

//Keys y values retorna las claves y los valores
console.log(contacts.keys);
console.log(contacts.values);

//Para limpiar el Map se usa clear
contacts.clear();
console.log(contacts);

