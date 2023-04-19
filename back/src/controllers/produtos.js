const con = require('../dao/connect')
const Produto = require('../models/produtos')

const modelarLista = (lista) => {
    for(i = 0; i < lista.length; i++)
        lista[i] = new Produto(lista[i])
    return lista
}


const cadastrar = (req, res) => {
    let produto = new Produto(req.body)
    con.query(produto.create(), (err, result) => {
        if (err == null)
            res.status(201).end()
        else
            res.status(500).json(err).end()
    })
    
}

const listar = async (req, res) => {
    let produto = new Produto(req.params)
    con.query(produto.read(), (err, result) => {
        if (err == null){
            res.json(modelarLista(result)).end()
        }
    })
}

const alterar = (req, res) => {
    let produto = new Produto(req.body)
    con.query(produto.update(), (err, result) => {
        if (result.affectedRows > 0)
            res.status(202).end()
        else
            res.status(404).end()
    })
}

const excluir = (req, res) => {
    let produto = new Produto(req.params)
    con.query(produto.delete(), (err, result) => {
        if (result.affectedRows > 0)
            res.status(204).end()
        else
            res.status(404).end()
    })
}


module.exports = {
    cadastrar,
    listar,
    alterar,
    excluir
}