//**** OPERADORES ****//

// Operadores Aritméticos
const [a, b, c, d] = [3, 5, 1, 15]
const soma = a+b+c+d
const subtracao = d-b
const multiplicacao = a*b
const divisao = d/a
const modulo = a%2
console.log(soma, subtracao, multiplicacao, divisao, modulo)
console.log('------------------------------------------------')

// Operadores Relacionais

console.log('01)', '1' == 1) // true
console.log('02)', '1' === 1) // false --> estritamente igual(verifica o tipo)
console.log('03)', '3' != 3) // false
console.log('04)', '3' !== 3) // true --> estritamente diferente(verifica o tipo)
console.log('05)', 3 < 2) // false
console.log('06)', 3 > 2) // true
console.log('07)', 3 <= 2) // false
console.log('08)', 3 >= 2) // true

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2) // false
console.log('10)', d1 == d2) // false
console.log('11)', d1.getTime() === d2.getTime()) // true
console.log('12)', undefined == null) // true
console.log('13)', undefined === null) // false

console.log('------------------------------------------------')
// Operadores Lógicos

function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 // ou
    const comprarTv50 = trabalho1 && trabalho2 // e
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2 // ou exclusivo
    const manterSaudavel = !comprarSorvete // negação lógica

    //cria um objeto com os valores das variáveis, com o mesmo nome
    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }  // ES2015


}
//testando...
console.log(compras(true, true))
console.log(compras(false, false))
console.log(compras(true, false))
console.log(compras(false, true))


console.log('------------------------------------------------')


// Operadores unários
let num1 = 1
let num2 = 2
num1++ // pós fixada
console.log(num1)
--num1 // pré fixada
console.log(num1)

console.log(++num1 === num2--) // true
console.log(num1 === num2) // false
console.log('------------------------------------------------')

// Operadores ternários

const resultado = nota => nota >= 6 ? 'Aprovado' : 'Reprovado' // função arrow
console.log(resultado(7.9))
console.log(resultado(5.9))