require('./global')

console.log(meuApp.saudacao())

meuApp.nome = 'Projeto Agostinho' // não é possível alterar o valor de um objeto congelado
console.log(meuApp.nome)

// Object.freeze(MeuApp) // congela o objeto