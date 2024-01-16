//----------------------------------------------------------------
// Notação ponto
console.log(Math.ceil(7.1))
const objeto1 = {}
//obejto1.nome = 'beg1'
//objeto1['nome'] = 'beg2'   --> tbm functional porem eh bom evitar
console.log(objeto1.nome)

function obejto2(nome) {
    this.nome = nome
    this.execute = function() {
        console.log('Executando...')
    }
}

const objeto3 = new obejto2 ('Controle')
const objeto4 = new obejto2 ('Mouse')
console.log(objeto3.nome, objeto4.nome)
objeto3.execute()

//----------------------------------------------------------------
// Atribuição
const a = 10
let b = 20
b += a // b = b+a
console.log(b)

b -= 5 // b = b-5
console.log(b)

b *= 2 // b = b*2
console.log(b)

b /= 2 // b = b/2
console.log(b)


//---------------------------------------------------------------------
// Destructuring
const pessoa = {
    nome: 'Simone God',
    idade: 105,
    endereco: {
        logradouro: 'Rua dos Dinos',
        numero: 1000
    }
}
// tirar de dentro do objeto os atributos nome e idade

const {nome, idade} = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(nome, idade)

const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep)
// somente o ultimo atributo pode ser undefined, o resto necessita ser definido
// para nao occorer erro (o caminho tem que estar definido)

//---------------------------------------------------------------------

// mostrando no Array
const [a1] = [100]
console.log(a1)

const [n1, , n3, , n5, n6 = 0] = [100, 70, 90, 80]
console.log(n1, n3, n5, n6)

// desestruturando array dentro de array
const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)

//---------------------------------------------------------------------

// mostrando em funcao
function rand({min = 0, max = 1000}) {
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

const obj = {max: 50, min: 40}
console.log(rand(obj))
console.log(rand({min: 955}))
console.log(rand({}))
//console.log(rand()) --> erro

//---------------------------------------------------------------------

// mostrando em funcao 2
function rand2([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min] // invertendo
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

console.log(rand2([50, 40]))
console.log(rand2([992]))
console.log(rand2([, 10]))
console.log(rand2([]))
//console.log(rand2()) --> erro