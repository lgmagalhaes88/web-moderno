const port = 3003
const express = require('express')
const db = require('./db')
const bodyparser = require('body-parser')

const app = express()

app.use(bodyparser.urlencoded({ urlencoded: true }))

// app.get('/produtos', (req, res, next) => {
//     console.log('Middleware')
//     next()
// })

app.get('/produtos', (req, res, next) => {
    res.send(db.getProdutos())
})

app.get('/', (req, res, next) => {
    res.send({teste: "ok"})
    //res.send(db.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(db.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = db.salvarProduto({
        nome: req.body.name,
        preco: req.body.preco
    })
    res.send(produto)
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = db.salvarProduto({
        id: req.body.id,
        nome: req.body.name,
        preco: req.body.preco
    })
    res.send(produto)
})

app.listen(port, () => {
    console.log(`Servidor executando na porta ${port}.`)
})