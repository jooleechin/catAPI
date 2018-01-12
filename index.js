let express = require('express')
let bodyParser = require('body-parser')
let app = express()

const PORT = process.env.PORT || 3000

app.use(bodyParser.json())

app.listen(PORT, () => {
    console.log(`APP listening on ${PORT}`)
}) 