// Funcionamento
// O foreach é um método que percorre um array e executa uma função para cada elemento do array.
// Sintaxe
// array.forEach(function(valor, indice, array) {
//     código   
// });
// Parâmetros
// valor: valor do elemento atual
// indice: índice do elemento atual

const numeros = [1, 2, 3, 4, 5]

numeros.forEach(function (numero, indice){
    console.log(numeros[indice]);
    // A função acima imprime os valores subsequentes a cada número do array numeros.
})

// por arrow function
numeros.forEach((numero, indice) => console.log(numeros[indice]))

// com callback
const imprimirProximo = numero => console.log(numero);
numeros.forEach(imprimirProximo);