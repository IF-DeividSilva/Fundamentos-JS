// contador A e B 
// A e B são instancias de um objeto criado a partir de uma função factory
const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

// contador C e D
// C e D são instancias de um objeto criado a partir de uma função factory
const contadorC = require('./instanciaNova')() // coloca () pois o retorno do require é uma função
const contadorD = require('./instanciaNova')()

// incrementa o contador A
contadorA.inc()
contadorA.inc()
contadorA.inc()
console.log('contador A:', contadorA.valor, 'contador B:', contadorB.valor)
// A = B

// incrementa o contador C
contadorC.inc()
contadorC.inc()
contadorC.inc()
console.log('contador C:', contadorC.valor, 'contador D:', contadorD.valor)
// C != D