//Comenzando con promesas vemos como cuando se gener un setTimeout se manda el código a ejecutar a una cola que espera que se ejecute todo el código inmediato y ahi ejecuta el 
//de la cola.

//Vemos como dice 0 milisegundos y está primero en la lista de ejecución pero al estar en timeout lo manda a la cola de espera
setTimeout(() => console.log("Evento 1"), 0);

//Ejecutamos código inmeditato
console.log("Evento 2");

//Usamos otro ejemplo de timeout con tiempo de espera
setTimeout(() => console.log("Evento 3"), 1000);

//Ejecutamos código inmeditato en un bucle para que veamos que aunque el bucle tenga un tiempo de ejecución mayor a los timeout igual espera por estar en cola
for (let i = 0; i < 10001; i++) {
    if (i === 10000) {
        console.log("Bucle for");
    }
}

//Que es una Promesa?
//Es un constructor que nos brinda ciertos metodos como, then, catch, All, race, resolve, reject

//Recibe un argumento, un callback, donde el callback recibe un resolve y un reject

//En este ejemplo simple es una funcion que quiero contar hasta 10 si me paso envío error con reject y si no lo paso por el resolve
const max = 11;

const promise = new Promise((resolve, reject) => {
    console.log("Contemos");
    setTimeout(() => {
        for (let i = 1; i <= max; i++) {
            console.log(i);
            if (i === 11) {
                reject("Llegué a 11");
            }
        }
        resolve("Terminé de contar");
    }, 1000);
});

console.log(promise.then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
}));

console.log("Esperemos a que cuente");

//El método all recibe un array de promises que espera a que se resuelvan todas para terminar
const promise1 = new Promise((resolve, reject) => {
    console.log("Promise 1");
    resolve("Promise 1 resolve");
});

const promise2 = new Promise((resolve, reject) => {
    console.log("Promise 2");
    resolve("Promise 2 resolve");
});

const promisesArray = [promise1, promise2];

Promise.all(promisesArray).then((data) => {
    console.log("Se terminaron");
    console.log(data);
});