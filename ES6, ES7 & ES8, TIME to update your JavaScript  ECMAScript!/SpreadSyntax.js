// Es lo contrario que Rest, tenemos un array y queremos dividirlo en diferentes parámetros.
const list = (a,b,c,d) => {
    return a + ' ' + b + ' ' + c + ' ' + d;
};

const letters = ["a", "b", "c", "d"];

list(...letters);

// Otra función interesante es para realizar copias de array sin que mantenga el puntero al array original
let original = [1,2,3,4,5];
let copy = [...original];