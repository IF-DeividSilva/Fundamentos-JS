// Adiciona filter2 no prototype de Array
Array.prototype.filter2 = function(callback) {
    // Cria um array novo
    const newArray = []
    // Percorre o array original
    for (let i = 0; i < this.length; i++) {
        // Executa a função callback para cada item e adiciona aqueles que retornaram true no novo array
        if (callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter2(caro).filter2(fragil))