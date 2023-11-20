//Vamos a ver como crear clases con el nuevo ES6
class SuperHero {
    constructor(name, strength, speed, weapon, cape) {
        this.name = name;
        this.strength = strength;
        this.speed = speed;
        this.weapon = weapon;
        this.cape = cape;
    }

    powerUp() {
        this.strength += 5;
    }

    //Métdos staticos, son funciones que no están atadas a los objetos creados por la clase, si no a la clase misma
    //En este ejemplo todos los super heroes son buenos entonces toda la clase SuperHero retorna que son buenos.
    static goodHero() {
        return true;
    }
}

//Herencia hacia abajo, Human es hija de SuperHero
class Human extends SuperHero {
    constructor(healthPoints, ...superHero){
        super(...superHero);
        this.healthPoints = healthPoints;
    }
}

const thor = ["Thor", 10, 8, "Mjolnr", true];
const hero = new SuperHero(...thor);
hero.powerUp();
console.log(hero);

const ironMan = [20,"Iron man", 5, 6, "The suit", false];
const hero2 = new Human(...ironMan);
console.log(hero2);

console.log(SuperHero.goodHero());