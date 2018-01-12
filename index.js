let express = require('express')
let bodyParser = require('body-parser')
let app = express()

//these two are the same. 1st one works because the file is called index.js
let model = require('./model')
//let model = require('./model/index')

const PORT = process.env.PORT || 3000

app.use(bodyParser.json())

//READ routes
app.get('/cats', (req, res) => {
    let cats = model.getAllCats()
    res.json({data: cats})
})

app.get('/cats/:id', (req, res) => {
    let id = Number(req.params.id)
    let cat = model.getCat(req.params.id)
    res.json({data: cat})
})

app.post('/cats', (req, res) => {
    let newCat = model.createCat(req.body)
    return ({data: newCat})
})

app.listen(PORT, () => {
    console.log(`APP listening on ${PORT}`)
}) 