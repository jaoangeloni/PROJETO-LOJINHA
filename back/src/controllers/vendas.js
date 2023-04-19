const con = require('../dao/connect')
const Venda = require('../models/vendas')

const modelarLista = (lista) => {
    for(i = 0; i < lista.length; i++)
        lista[i] = new Venda(lista[i])
    return lista
}


const cadastrar = (req, res) => {
    let venda = new Venda(req.body)
    con.query(venda.create(), (err, result) => {
        if (err == null)
            res.status(201).end()
        else
            res.status(500).json(err).end()
    })
    
}

const listar = async (req, res) => {
    let venda = new Venda(req.params)
    con.query(venda.read(), (err, result) => {
        if (err == null){
            res.json(modelarLista(result)).end()
        }
    })
}

const alterar = (req, res) => {
    let venda = new Venda(req.body)
    con.query(venda.update(), (err, result) => {
        if (result.affectedRows > 0)
            res.status(202).end()
        else
            res.status(404).end()
    })
}

const excluir = (req, res) => {
    let venda = new Venda(req.params)
    con.query(venda.delete(), (err, result) => {
        if (result.affectedRows > 0)
            res.status(204).end()
        else
            res.status(404).end()
    })
}

const vendas = async (req, res) => {
    let venda = new Venda(req.params)
    con.query(venda.vendas(), (err, result) => {
        if (err == null){
            res.json(result).end()
        }
    })
}

const total = async (req, res) => {
    let venda = new Venda(req.params)
    con.query(venda.total(), (err, result) => {
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
    vendas,
    total
}