const express = require("express");
const routerVendas = express.Router();

const Venda = require('../controllers/vendas');

routerVendas.post('/venda', Venda.cadastrar);
routerVendas.get('/vendas', Venda.listar);
routerVendas.get('/vendas/:id', Venda.listar);
routerVendas.get('/viewVendas', Venda.vendas);
routerVendas.get('/total', Venda.total);
routerVendas.put('/alterarVenda', Venda.alterar);
routerVendas.delete('/excluirVenda/:id', Venda.excluir);


module.exports = routerVendas