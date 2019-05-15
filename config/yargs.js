const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar.', {
        base: {
            alias: 'b',
            demand: true
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .command('crear', 'Genera un archivo con la tabla de multiplicar indicado por la base y el limite.', {
        base: {
            alias: 'b',
            demand: true
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}