// Array --> objeto
// os dados do array não precisam ser homogeneos ("mesmo tipo")
// Porem usar array com dados homogeneos é uma boa pratica
console.log(typeof Array, typeof new Array, typeof [] )

// cria um vetor (instancia)
let aprovados = new Array ('A', "B", "C")
console.log(aprovados)

// pode usar o push para add um novo elemento no final
aprovados.push("D")

// para ordenar o array usar funcao sort
aprovados.sort()
console.log(aprovados)
// nao altera o array original
// cria um novo array ordenado

// para excluir um elemento
delete aprovados[1]
console.log(aprovados)
// o elemento excluido fica undefined
// e o array nao é reordenado

// para adicionar um elemento em uma posicao especifica
aprovados.splice(1, 0, "B")
console.log(aprovados)
// o primeiro parametro é a posicao 
// o segundo parametro é a quantidade de elementos a serem excluidos a partir do primeiro parametro
// o terceiro parametro é o elemento a ser adicionado


