// Archivo principal de ejecución

// Importar funciones de la libreria
const { taskOne, taskTwo } = require('./library.js')
const measureSequentialMsg = 'Tiempo secuencial'
const measureParallelMsg = 'Tiempo paralelo'

// Para ejecutar tareas asíncronas, las invocaciones deben realizarse
// en una función también asíncrona

async function executeSequential(){
    // Para medir el tiempo de ejecución podemos usar los métodos time y timeEnd de console
    // No debo agregar ': ' al string argumento ya que se agrega como sufijo automáticamente
    console.time(measureSequentialMsg)

    // En caso de error, se usa try-catch para poder manejarlo y evitar que se rompa el programa
    try {
        const msg1 = await taskOne()
        const msg2 = await taskTwo()
        console.log(msg1, msg2)
    } catch(e) {
        console.log('error in sequential execution')
    }

    // en caso de éxito, el tiempo total es la suma de lo que demoran las tareas involucradas
    console.timeEnd(measureSequentialMsg)
}

async function executeParallel(){
    // Para ejecutar en paralelo, se puede usar Promise.all y pasar las tareas en un arreglo
    console.time(measureParallelMsg)

    try {
        const messages = await Promise.all([taskOne(), taskTwo()])
        console.log(messages[0], messages[1])
    } catch (e) {
        // en este caso, si una tarea provoca un error apenas comienza a ejecutarse
        // ocurrirá que se detendrán todas las tareas del mismo Promise.all
        console.log('error in parallel execution');
    }

    // en caso de éxito, el tiempo total es el demorado por la tarea más lenta
    console.timeEnd(measureParallelMsg)
}

// Usamos la sentencia await para evitar que los tests se solapen (son asíncronos)
async function executeTests(){
    await executeSequential()
    await executeParallel()
}

// Programa principal
executeTests()