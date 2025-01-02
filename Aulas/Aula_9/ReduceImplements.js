// implementacao do reduce
Array.prototype.reduce2 = function (callback, valorInicial){
    // se valorInicial for passado, ele será o acumulador inicial
    const indiceInicial = valorInicial ? 0 : 1
    let acumulador = valorInicial || this[0]
    
    // percorre o array a partir do indiceInicial
    for(let i = indiceInicial; i < this.length; i++){
        acumulador = callback(acumulador, this[i], i, this)
    }
    
    return acumulador
}

// teste
const numeros = [1, 2, 3, 4, 5]
console.log(numeros.reduce2((total, numero) => total + numero )) // 15
console.log(numeros.reduce2((total, numero) => total + numero, 0)) // 15
console.log(numeros.reduce2((total, numero) => total * numero, 1)) // 120