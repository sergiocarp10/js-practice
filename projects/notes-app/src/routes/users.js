const express = require('express')
const router = express.Router()

// Rutas bajo el "directorio" users
router.get('/users/signin', (req, res) => {
    res.send('Inicio de sesion')
})

router.get('/users/signup', (req, res) => {
    res.send('Registrarse')
})

module.exports = router