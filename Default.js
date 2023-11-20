// En ES6 se agrega el parámetro a las funciones, permite definir un estado sin pasarle el parámetro en la llamada.
const getArea = (side, height, figure = "rectangle") => {
    if (figure === "rectangle") {
        return side * height;
    } else if (figure === "other") {
        return (side * height) / 2;
    }
}

const rectangleArea = getArea(2, 5);