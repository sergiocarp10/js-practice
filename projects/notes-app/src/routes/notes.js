const express = require('express')
const router = express.Router()

// Rutas bajo el "directorio" notes
router.get('/notes', (req, res) => {
    res.send('Mis notas')
})

module.exports = router