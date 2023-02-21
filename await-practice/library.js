// En este archivo crearemos las tareas asíncronas a ejecutar

// Para simular tiempo de procesamiento, podemos usar la función setTimeout
const util = require('util')
const sleep = util.promisify(setTimeout)        // permite usar setTimeout como promesa

// volverlos públicos
module.exports = {

    // se definen las funciones a exportar separadas por coma

    async taskOne(){
        await sleep(1000)
        return "Hola mundo"
    },

    async taskTwo(){
        await sleep(500)
        throw new Error('Error puesto a propósito')
        await sleep(2000)
        return "Adiós!"
    }
}