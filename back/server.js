const express = require('express')
const cors = require('cors')

const routerProdutos = require('./src/routes/produtos')
const routerVendas = require('./src/routes/vendas')
const routerVendedores = require('./src/routes/vendedores')


const app = express()
app.use(express.json())
app.use(cors())

app.use(routerProdutos)
app.use(routerVendas)
app.use(routerVendedores)

app.listen(3000, () => {
    console.log("Positivo e operante")
})