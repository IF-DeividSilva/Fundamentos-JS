// Objeto que nao pode ser extendido
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promocao'
})
console.log('Extensivel:', Object.isExtensible(produto))
produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal --> NAO CONSEGUE ADD NEM DELETAR, MAS CONSEGUE MODIFICAR
const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))
pessoa.sobrenome = 'Silva' // NAO ADD
delete pessoa.nome // NAO DELETA
pessoa.idade = 29 // CONSEGUE MODIFICAR
console.log(pessoa)

// Object.freeze = selado + valores constantes


