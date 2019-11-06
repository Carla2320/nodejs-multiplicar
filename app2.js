// const multiplicar = require('./multiplicacion/multiplicar.js');
// let base = 5;
//IMportacion con destructuracion

const { crearArchivo } = require('./multiplicacion/multiplicar.js');
let parametro = process.argv[2];
let base = parametro.split('=')[1];
//Con esto por medio de consola poderemos poner directamente
console.log(base);

// para ejecutar node app2.js --base=23