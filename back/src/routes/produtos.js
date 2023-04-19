const express = require("express");
const routerProdutos = express.Router();

const Produto = require('../controllers/produtos');

routerProdutos.post('/produto', Produto.cadastrar);
routerProdutos.get('/produtos', Produto.listar);
routerProdutos.get('/produtos/:id', Produto.listar);
routerProdutos.put('/alterarProduto', Produto.alterar);
routerProdutos.delete('/excluirProduto/:id', Produto.excluir);

module.exports = routerProdutos