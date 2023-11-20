// Rest operator permite incluir en un array todos los demás parámetros envíados a una función.
// En este ejemplo se quiere saber la mayor nota que sea menor que el primer parámetro.

const findHighest = (upperLimit, ...numList) => {
    let max = 0;

    for (let i = 0; i < numList.length; i++) {
        if (numList[i] < upperLimit && numList[i] > max) {
            max = numList[i];
        };
    };
    return max;
};

const highest = findHighest(80,99,88,77,88,87,67,7,56);