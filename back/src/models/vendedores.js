class Vendedores {

    constructor(i) {
        this.id = i.id
        this.nome = i.nome
        this.matricula = i.matricula
    }
    create() {
        return `INSERT INTO vendedores VALUE(default,'${this.nome}',${this.matricula})`
    }

    read() {
        if (this.id == undefined)
            return `SELECT * FROM vendedores`
        else
            return `SELECT * FROM vendedores WHERE id = ${this.id}`
    }

    update() {
        return `UPDATE vendedores SET nome = '${this.nome}', matricula = ${this.matricula} WHERE id = ${this.id}`
    }

    delete() {
        return `DELETE FROM vendedores WHERE id = ${this.id}`
    }
    vendas(){
        return `SELECT nome, matricula, total_vendido, (total_vendido * 0.05) AS comissao FROM (
            SELECT vendedores.nome, vendedores.matricula, SUM(produtos.valor * vendas.quantidade) AS total_vendido FROM vendas
            INNER JOIN produtos ON vendas.produtoId = produtos.id
            INNER JOIN vendedores ON vendas.vendedorId = vendedores.id
            GROUP BY vendedores.id
            )AS vendas_vendedor`
    }

}

module.exports = Vendedores