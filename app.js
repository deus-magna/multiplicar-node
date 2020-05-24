// const fs = require('express');
// const fs = require('./fs');
const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo.green}`))
            .catch(e => console.log(e.red));
        break;
    default:
        console.log('Comando no reconocido');
        break;
}

// console.log(argv.base);
// console.log(argv.limite);
// console.log(process.argv);

//let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];

// crearArchivo(base)
//     .then(archivo => console.log(`El archivo tabla ${base} a sido creado!`))
//     .catch(e => console.log(e));