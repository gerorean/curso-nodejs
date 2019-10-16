const os = require('os');//modulo de nodejs que maneja el sistema operativo https://nodejs.org/dist/latest-v12.x/docs/api/os.html

console.log(os.platform());
console.log(os.release());
console.log('free mem: ',os.freemem()+' bytes');
console.log('total mem: ',os.totalmem()+' bytes');








/*
//----------
//1
//console.log("hola mundo 2019");

//2
//console.log(add(1,2));

//3
const math = require('./math.js');//permite usar modulos propios o preinstalados/preconstruidos para modulos propios use ./ antes para indicar que el archivo, modulo propio, elaborado esta el modulo que necesita esta en el misma carpeta raiz

//5
console.log(math);//muestra el contenido del modulo 'math'

//4
/*
console.log(math.add(1,2));
console.log(math.substract(1,2));
console.log(math.multiply(1,2));
console.log(math.divide(1,0));
*/

