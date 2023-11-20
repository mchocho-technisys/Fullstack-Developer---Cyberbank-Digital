//Simple for
const list = [1, 2, 3, 4, 5];

// for
for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
};

//for ... in
for (let key in list) {
    console.log(list[key]);
}

//for ... each, si se necesita el index se agrega otro parametro a la funciona anonima
list.forEach((value) => console.log(value));

//for ... of
for(let value of list) {
    console.log(value);
}