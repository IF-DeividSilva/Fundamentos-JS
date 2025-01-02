const numeros = [1, 2, 3, 4, 5]

// for com proposito
// Map -> Gera um array novo alterando-o conforme algum parametro

let dobroNumeros = numeros.map(function(numero){
    return numero * 2
});

console.log(dobroNumeros)

// usando arrow function
const soma5 = numeros => numeros + 5
const paraDinheiro = numeros => `R$ ${parseFloat(numeros).toFixed(2).replace('.', ',')}`

console.log(numeros.map(soma5).map(paraDinheiro))


