const express = require("express");
const routerVendedores = express.Router();

const Vendedor = require('../controllers/vendedores');

routerVendedores.post('/vendedor', Vendedor.cadastrar);
routerVendedores.get('/vendedores', Vendedor.listar);
routerVendedores.get('/vendedores/:id', Vendedor.listar);
routerVendedores.get('/viewVendedor', Vendedor.view);
routerVendedores.put('/alterarVendedor', Vendedor.alterar);
routerVendedores.delete('/excluirVendedor/:id', Vendedor.excluir);

module.exports = routerVendedores