//----Hosting----
// é um comportamento padrado de mover a declaração de variaveis para o topo 


// com var
console.log('a=', a)
var a = 2
console.log('a=', a)
// em js o interpretador faz o icamento da variavel para o topo do codigo

// com let
//console.log('b=', b)
//let b = 2
//console.log('b=', b)
// com let não ocorre o icamento da variavel para o topo do codigo 


//-----------------------------------------------------------------------------
// Objetos e Funcões

console.log(typeof Object)
//chama o construtor
console.log(typeof new Object)

const Cliente = function() {}
console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto {} //ES 2015 (ES6)
console.log(typeof Produto)

// Nome/valor
const saudacao = 'Opa' // contexto léxico 1

function exec() {
    const saudacao = 'Falaaa' // contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Lorem Ipsum',
    idade: 35,
    peso: 85,
    endereco: {
        logradouro: 'Rua Da Discordancia',
        numero: 321
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)


