const mongoose = require('mongoose')

// constants
const databaseUrl = 'mongodb://localhost/notes-database'

// init
mongoose.set('strictQuery', false)

mongoose.connect(databaseUrl, {
    
})
    .then(db => console.log('db connected'))
    .catch(e => console.error(e))
    