const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Mévio',
        nota: 8.1
    }, {
        nome: 'Adamastor',
        nota: 9.3
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Tício',
        nota: 8.9
    }, {
        nome: 'Agostinho',
        nota: 7.3
    }]
}]
// Objetivo: extrair todas as notas dos alunos de todas as turmas
// Implementação sem flatMap
const getNota = aluno => aluno.nota
const getNotaTurma = turma => turma.alunos.map(getNota)

const notasTurmaM1 = escola.map(getNotaTurma)
console.log(notasTurmaM1) // array dentro de outro array // [ [ 8.1, 9.3 ], [ 8.9, 7.3 ] ]

// implementado o flatMap
// flatMap é uma função que serve para reduzir o array a um único valor
Array.prototype.flatMap = function(callback) {  
    return Array.prototype.concat.apply([], this.map(callback)); 
};

const notas2 =  escola.flatMap(getNotaTurma)
console.log(notas2)