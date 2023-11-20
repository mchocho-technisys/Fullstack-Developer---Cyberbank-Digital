//Permite tomar las propiedades que queremos de un objeto creadod de manera sencilla.
const human = {
    name: 'Juan',
    age: 25,
    occupation: 'Programador',
    isMarried: true,
    isEmployed: true,
    surname: 'Perez',
    email: 'juanp@gmail.com',
    address: '123 Main',
}

const { name, age, surname } = human;
const person = {
    name,
    age,
    surname
};

const presentation = (person) => {
    console.log(`${person.name} ${person.surname} tiene ${person.age} años`);
}

//Existe una forma donde permite acortar más el codigo que es pasando el destructuring en los parametros de la funcion
const presentation2 = ({ name, age, surname }) => {
    console.log(`${name} ${surname} tiene ${age} años`);
}

presentation(person);
presentation2(person);