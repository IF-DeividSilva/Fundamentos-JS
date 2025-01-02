const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lapis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]

// Desafio -> Retornar um array apenas com os preços

const Obj = json => JSON.parse(json)
const onlyPreco = produto => produto.preco

const resultado = carrinho.map(Obj).map(onlyPreco)
console.log(resultado) // [3.45, 13.9, 41.22, 7.5]