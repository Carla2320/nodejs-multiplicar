const fs = require('fs')
let base = 3;
let data = '';

let listarTabla = (base, limite) => {
    for (let i = 1; i <= limite; i++) {
        data += (`${base}*${i}=${base*1}\n`)
    }
}

let crearArchivo = (base) => {
    return new Promise((reject, resolve) => {
        for (let i = 1; i <= 10; i++) {
            data += (`${base}*${i}=${base*1}\n`)
            fs.writeFile('tablas/tabla' + base + '.txt', data, (err) => {
                if (err) {
                    resolve(console.log('The file has been saved!'));

                } else {
                    reject(console.log(err));
                }

            });
        }
    })
}

module.exports = {
    crearArchivo,
    listarTabla
};
//Puedes compartir con otros js y crea archivos por medio