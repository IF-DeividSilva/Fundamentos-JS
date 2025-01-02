// funcao reduce 
// reduce é uma função que serve para reduzir o array a um único valor
// Exemplo: somar todos os elementos de um array

const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

// TODO1: Selecionar todos alunos bolsistas
// salva em todos bolsistas se todos os alunos são bolsistas
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

// TODO2: Verificar se algum aluno é bolsistas
// salva em algum bolsista se algum aluno é bolsista
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))
