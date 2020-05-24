const fs = require('fs');
const colors = require('colors');

// module.exports.crearArchivo = (base) => {
let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor ingresado ${ base } no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`);
        });
    });
}

let listarTabla = (base, limite) => {

    if (!Number(base)) {
        reject(`El valor ingresado ${ base } no es un número`);
        return;
    }

    if (!Number(limite)) {
        reject(`El valor ingresado ${ limite } no es un número`);
        return;
    }
    console.log('======================'.green);
    console.log(`Tabla de ${ base }`.green);
    console.log('======================'.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`);
    }
}

module.exports = {
    crearArchivo,
    listarTabla
}