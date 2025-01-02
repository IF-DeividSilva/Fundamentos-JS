// const n permite reatribuição da var
const numbers = [1,2,3,4]

// remove do topo da pilha (ultimo elemento)
numbers.pop()

// remove do inicio da pilha (primeiro elemento)
numbers.shift()

// adiciona no topo da pilha (ultimo elemento)
numbers.push(5)

// adiciona no inicio da pilha (primeiro elemento)
numbers.unshift(0)

// splice pode adicionar ou remover elementos

// adiciona um novo elemento na posição 2
numbers.splice(2, 0, 2.5)

// remove um elemento na posição 2
numbers.splice(2, 1)

console.log(numbers)
