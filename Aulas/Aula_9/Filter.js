const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]
// Função filter
// Retorna um novo array com os elementos que passaram no teste
// Se não passar, retorna um array vazio
console.log(produtos.filter(function (p) { 
    return false
}))

const caro = produto => produto.preco >= 300
const fragile = produto => produto.fragil
console.log (produtos.filter(caro).filter(fragile ))
