const tabelaVendedor = document.querySelector("#tabelaVendedor")

const iId = document.querySelector("#iId")
const iNome = document.querySelector("#iNome")
const iMatricula = document.querySelector("#iMatricula")

api.get("/vendedores")
.then(resp => {
    listarVendedores(resp.data);
})

function listarVendedores(vetor) {
    vetor.forEach(e => {
        let linha = document.createElement('tr')
        let col1 = document.createElement('td')
        let col2 = document.createElement('td')
        let col3 = document.createElement('td')
        let col4 = document.createElement('td')
        let del = document.createElement('button')
        
        del.classList.add("apagar")
        del.setAttribute('onclick', `excluirVendedor('${e.id}')`)
        
        col1.innerHTML = e.id
        col2.innerHTML = e.nome
        col3.innerHTML = e.matricula
        
        col4.appendChild(del)
        linha.appendChild(col1)
        linha.appendChild(col2)
        linha.appendChild(col3)
        linha.appendChild(col4)
        tabelaVendedor.appendChild(linha)
    });
}

function alterarVendedor(){
    let vendedor = { 
        "id": iId.value,
        "nome":iNome.value,
        "matricula":iMatricula.value,
    }
    api.put("/alterarVendedor", vendedor)
    .then(resp => {
        alert("Alterado com sucesso")
        window.location.reload()
    })
} 

function excluirVendedor(id) {
    if (confirm('Excluir vendedor?'))
       api.delete("/excluirVendedor/" + id)
            .then(resp => resp.status)
            .then(resp => {
                if (resp == 204) window.location.reload()
                else alert('Erro ao enviar dados')
            })
}

//--------------------------------------------------------------------------------------------------------


const tabelaProdutos = document.querySelector("#tabelaProdutos")

api.get("/produtos")
.then(resp => {
    listarProdutos(resp.data);
})

function listarProdutos(vetor) {
    vetor.forEach(e => {
        let linha = document.createElement('tr')
        let col1 = document.createElement('td')
        let col2 = document.createElement('td')
        let col3 = document.createElement('td')
        let col4 = document.createElement('td')
        let del = document.createElement('button')
        
        del.classList.add("apagar")
        del.setAttribute('onclick', `excluirVendedor('${e.id}')`)
        
        col1.innerHTML = e.id
        col2.innerHTML = e.nome
        col3.innerHTML = e.valor.toFixed(2)
        
        col4.appendChild(del)
        linha.appendChild(col1)
        linha.appendChild(col2)
        linha.appendChild(col3)
        linha.appendChild(col4)
        tabelaProdutos.appendChild(linha)
    });
}

//--------------------------------------------------------------------------------------------------------

const tabelaVendas = document.querySelector("#tabelaVendas")

const iIdVenda = document.querySelector("#iIdVenda")
const iQtd = document.querySelector("#iQtd")
const iProduto = document.querySelector("#iProduto")
const iVendedor = document.querySelector("#iVendedor")

api.get("/viewVendas")
.then(resp => {
    listarVendas(resp.data);
})

function listarVendas(vetor) {
    vetor.forEach(e => {
        let linha = document.createElement('tr')
        let col1 = document.createElement('td')
        let col2 = document.createElement('td')
        let col3 = document.createElement('td')
        let col4 = document.createElement('td')
        let col5 = document.createElement('td')
        let col6 = document.createElement('td')
        let del = document.createElement('button')

        del.classList.add("apagar")
        del.setAttribute('onclick', `excluirVenda('${e.id}')`)

        col1.innerHTML = e.id
        col2.innerHTML = new Date(e.data).toLocaleDateString()
        col3.innerHTML = e.quantidade
        col4.innerHTML = e.vendedor
        col5.innerHTML = e.nome

        col6.appendChild(del)
        linha.appendChild(col1)
        linha.appendChild(col2)
        linha.appendChild(col3)
        linha.appendChild(col4)
        linha.appendChild(col5)
        linha.appendChild(col6)
        tabelaVendas.appendChild(linha)
    });
}

function alterarVenda(){
    let venda = { 
        "id": iIdVenda.value,
        "quantidade":iQtd.value,
        "produtoId":iProduto.value,
        "vendedorId":iVendedor.value,
    }
    api.put("/alterarVenda", venda)
    .then(resp => {
        alert("Alterado com sucesso")
        window.location.reload()
    })
} 

function excluirVenda(id) {
    if (confirm('Excluir venda?'))
       api.delete("/excluirVenda/" + id)
            .then(resp => resp.status)
            .then(resp => {
                if (resp == 204) window.location.reload()
                else alert('Erro ao enviar dados')
            })
}

const cQtd= document.querySelector("#cQtd")
const cVendedor = document.querySelector("#cVendedor")
const cProduto = document.querySelector("#cProduto")

function cadastrarVenda(){
    let venda = { 
        "quantidade": cQtd.value,
        "vendedorId": cVendedor.value,
        "produtoId": cProduto.value,
    }
    api.post("/venda", venda)
    .then(resp => {
        alert("Cadastrado com sucesso")
        window.location.reload()
    })
}