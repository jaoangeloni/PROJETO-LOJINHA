const con = require('../dao/connect')
const Vendedor = require('../models/vendedores')

const modelarLista = (lista) => {
    for(i = 0; i < lista.length; i++)
        lista[i] = new Vendedor(lista[i])
    return lista
}


const cadastrar = (req, res) => {
    let vendedor = new Vendedor(req.body)
    con.query(vendedor.create(), (err, result) => {
        if (err == null)
            res.status(201).end()
        else
            res.status(500).json(err).end()
    })
    
}

const listar = async (req, res) => {
    let vendedor = new Vendedor(req.params)
    con.query(vendedor.read(), (err, result) => {
        if (err == null){
            res.json(modelarLista(result)).end()
        }
    })
}

const alterar = (req, res) => {
    let vendedor = new Vendedor(req.body)
    con.query(vendedor.update(), (err, result) => {
        if (result.affectedRows > 0)
            res.status(202).end()
        else
            res.status(404).end()
    })
}

const excluir = (req, res) => {
    let vendedor = new Vendedor(req.params)
    con.query(vendedor.delete(), (err, result) => {
        if (result.affectedRows > 0)
            res.status(204).end()
        else
            res.status(404).end()
    })
}

const view = async (req, res) => {
    let vendedor = new Vendedor(req.params)
    con.query(vendedor.vendas(), (err, result) => {
        if (err == null){
            res.json(result).end()
        }
    })
}

module.exports = {
    cadastrar,
    listar,
    alterar,
    excluir,
    view
}