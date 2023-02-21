// Archivo principal de ejecución

// Librerias a importar
const express = require('express')
const express_hbs = require('express-handlebars')
const express_session = require('express-session')
const method_override = require('method-override')
const path = require('path')

// Inicializacion
const app = express()
const db = require('./database')

// Configuración de las vistas
function setViewEngine(){
    const views_dir = path.join(__dirname, 'views')

    app.engine('.hbs', express_hbs.engine({
        defaultLayout: 'main',
        layoutsDir: path.join(views_dir, 'layouts'),
        partialsDir: path.join(views_dir, 'partials'),
        extname: '.hbs'
    }))

    app.set('views_dir', views_dir)
    app.set('view_engine', '.hbs')
}

// Rutas
function setRoutes(){
    app.use(require('./routes/index'))
    app.use(require('./routes/users'))
    app.use(require('./routes/notes'))
}

// Archivos estáticos
function setStaticFiles(){
    const publicDir = path.join(__dirname, 'public')
    app.use(express.static(publicDir))
}

// Middlewares
function setMiddlewares(){
    const urlencoded = express.urlencoded({
        extended: false
    })

    const override = method_override('_method')

    const session = express_session({
        secret: 'notesAppSecretKey',
        resave: true,
        saveUninitialized: true
    })

    app.use(urlencoded)   
    app.use(override) 
    app.use(session)
}

// Arranque de servidor - conexión
function listenPort(){
    const port = process.env.PORT || 3000

    app.listen(port, () => {
        console.log('Escuchando en puerto', port);
    })

    app.set('puerto', port)
}

// Código principal
setViewEngine()
setRoutes()
setStaticFiles()
setMiddlewares()
listenPort()