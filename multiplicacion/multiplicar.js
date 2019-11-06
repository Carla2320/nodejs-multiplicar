const fs = require('fs')
let base = 3;
let data = '';
let crearArchivo = (base) => {
    return new Promise((reject, resolve) => {
        for (let i = 1; i <= 10; i++) {
            if (base == Number) {

                data += (`${base}*${i}=${base*1}\n`)
                fs.writeFile('tablas/tabla' + base + '.txt', data, (err) => {
                    if (err) {
                        resolve(console.log('The file has been saved!'));

                    } else {
                        reject(console.log(err));
                    }

                });
            } else {
                reject(console.log('el valor introducido no es un numero'))
                return;
            }
        }
    })
}

module.exports = {
    crearArchivo: crearArchivo
};
//Puedes compartir con otros js y crea archivos por medio de objetos