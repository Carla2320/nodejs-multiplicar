const argv = require('yargs')
    .command('crear', 'Crear un archivo con la tabla se multiplicar', {
        base: {
            demand: false,
            //parametro obligatorio 
            alias: 'b',
            description: 'La base de la tabla de multiplicar'
        },
        limite: {
            alias: 'l',
            default: 10,
            description: 'limite de la tabla de multiplicar'
        }
    })
    .command('listar', 'Crear un archivo con la tabla se multiplicar', {
        base: {
            demand: false,
            //parametro obligatorio 
            alias: 'b',
            description: 'La base de la tabla de multiplicar'
        },
        limite: {
            alias: 'l',
            default: 10,
            description: 'limite de la tabla de multiplicar'
        }
    })
const { crearArchivo, listarTabla } = require('./multiplicacion/multiplicar.js');

//const fs = require('fs')
// ingresa dentro de los archivos la funcion file sistem
//let base = parametro.split('=')[1];
//let data = '';
let argv2 = process.argv

// for (let i = 1; i <= 10; i++) {
//     data += (`${base}*${i}=${base*1}\n`)
// }
//INgresamos a una carpeta y dependiendo de la tabla se va a crear los archivos
// fs.writeFile('tablas/tabla' + base + '.txt', data, (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
// });

let command = argv._[0];

switch (command) {
    case 'crear':
        crearArchivo(argv.base)
            .then(archivo => console.log(`ARCHIVO CREADO: ${archivo}`))
            .catch(e => console.log(e));
        break;
    case 'listar':
        listarTabla(argv.base, argv.limite)

        break;
    default:
        console.log("Comando no valido");
}

console.log(command);
//NOs muestra la informacion acerca de los modulos