const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello world!')
})

// otra ruta de ejemplo
router.get('/about', (req, res) => {
    res.send('About')
})

module.exports = router