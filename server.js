const express = require('express')
const srv = express()

const SERVER_PORT = process.env.PORT || 4444

srv.set('view engine', 'hbs')

srv.use('/', express.static(__dirname + '/public'))

srv.listen(SERVER_PORT, () => {
    console.log(`Server started at http://localhost:${SERVER_PORT}`)
})