// fazer um par -> par chave valor pode ser function string, numero string ...

const tecnologias = new Map()
tecnologias.set('react', {framework: false})
tecnologias.set('angular', {framework: true})

console.log(tecnologias.react) // undefined
console.log(tecnologias.get('react').framework) //false

const chavesVariaveis = new Map([
    [function () { }, 'Funcao'],
    [{}, 'Objeto'],
    [123, 'numero'],

])

chavesVariaveis.forEach((v1 , ch) => {
    console.log(ch, v1)
})

console.log(chavesVariaveis.has(123)) // acessar
chavesVariaveis.delete(123) // excluir 
console.log(chavesVariaveis.size) // tamanho


chavesVariaveis.set(123, 'a')
chavesVariaveis.set(123, 'b')
chavesVariaveis.set(456, 'b')
console.log(chavesVariaveis)


