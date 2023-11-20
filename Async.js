// Permite ejecutar acciones de manera asincrona, permitiendo que el código espere
const myAsync = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Pasaron dos segundos");
        }, 2000);
    });
};

const printer = async () => {
    console.log("Llamando a mi funcion asincrona");
    //Va a esperar a que la promesa termine
    await myAsync().then((resolve) => {
        console.log(resolve);
    });
    console.log("Terminé")
}

printer();