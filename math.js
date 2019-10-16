//4
const math2 = {}//crea objetos{}, funciones(), variables

//1
function add(x1, x2) {
    return x1 + x2;
}

function substract(x1, x2) {
    return x1 - x2;
}

function multiply(x1, x2) {
    return x1 * x2;
}

function divide(x1, x2) {
    if(x2 == 0){
        console.log("no se puede dividir por 0");
    }else{
      return x1 / x2;  
    }
}
//2
/*
exports.add = add;//exporta una funcion, propiedad de un objeto
exports.substract = substract; 
exports.multiply = multiply;
exports.divide = divide;
*/


//3
math2.add = add;//asigna una propiedad a un objeto
math2.substract = substract;
math2.multiply = multiply;
math2.divide = divide;

module.exports = math2;//exporta objetos, funciones, variables

