// funcao reduce 
// reduce é uma função que serve para reduzir o array a um único valor
// Exemplo: somar todos os elementos de um array

const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

// Exemplo de uso do reduce
const somaNotas = alunos.map(a => a.nota).reduce(function (acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 0) // 0 é o valor inicial do acumulador

console.log('Soma das notas:', somaNotas)
