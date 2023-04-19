class Venda {

    constructor(i) {
        this.id = i.id
        this.quantidade = i.quantidade
        this.produtoId = i.produtoId
        this.vendedorId = i.vendedorId
    }
    create() {
        return `INSERT INTO vendas VALUE(default,CURDATE(),${this.quantidade},${this.produtoId},${this.vendedorId})`
    }

    read() {
        if (this.id == undefined)
            return `SELECT * FROM vendas`
        else
            return `SELECT * FROM vendas WHERE id = ${this.id}`
    }

    update() {
        return `UPDATE vendas SET quantidade = ${this.quantidade}, produtoId = ${this.produtoId}, vendedorId = ${this.vendedorId} WHERE id = ${this.id}`
    }

    delete() {
        return `DELETE FROM vendas WHERE id = ${this.id}`
    }
    vendas(){
        return `SELECT data, produtos.nome as produto, vendedor.nome as vendedor FROM vendas
        INNER JOIN produtos ON produtoId = produtos.id
        INNER JOIN vendedores vendedor ON vendedorId = vendedor.id;`
    }
    total(){
        return `SELECT SUM(produtos.valor * quantidade) as total FROM vendas
        INNER JOIN produtos ON produtoId = produtos.id;` 
    }
}

module.exports = Venda