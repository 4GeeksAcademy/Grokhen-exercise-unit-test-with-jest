// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromDollarToYen = (valueInDollar) => {
    let euros = valueInDollar/1.07;
    let valueInYen = euros * 156.5;
    return valueInYen; 
}

const fromYenToPound = (valueInYen) => {
    let euros = valueInYen/156.5;
    let valueInPound = euros * 0.87;
    return valueInPound; 
}

module.exports = {  fromEuroToDollar, fromDollarToYen, fromYenToPound };
