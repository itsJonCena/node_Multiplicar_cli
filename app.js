const argv = require('./config/yargs').argv;

const {
    crearArchivo,
    listarTabla
} = require("./multiplicar/multiplicar")

//console.log(argv);
let base = argv.base;
let limite = argv.limite;
//console.log('base: ', base);
let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(base, limite);
        break;

    case 'crear':
        crearArchivo(base, limite).then((archivo) => {
            console.log(archivo);
        }).catch((err) => {
            console.error(err);
        });
        break;

    default:
        console.log('Comando no reconocido');
        break;
}