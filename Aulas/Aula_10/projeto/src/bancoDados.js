const sequencia = {
    _id: 1,
    get id() { return this._id++ }
}

const produtos = {}

function salvarProduto(produto) {
    if (!produto.id) produto.id = sequencia.id // se o produto nao tiver id, ele vai receber o id da sequencia
    produtos[produto.id] = produto // o produto vai ser armazenado no objeto produtos
    return produto // retorna o produto
}

function getProduto(id) {
    return produtos[id] || {} // retorna o produto com o id fornecido ou um objeto vazio
}

function getProdutos(){
    return Object.values(produtos) // retorna todos os produtos
}

function excluirProduto(id) {
    const produto = produtos[id] // pega o produto com o id fornecido
    delete produtos[id] // exclui o produto do objeto produtos
    return produto // retorna o produto excluido
}

module.exports = { salvarProduto, getProduto, getProdutos , excluirProduto} // exporta as funcoes para serem usadas em outros arquivos