// Permite armazenar valores unicos de qualquer tipo 

const games = new Set()
games.add('Forza Horizon 4')
games.add('Gta 5').add('Gta 6').add('Far Cry 5').add('Fifa 21')

console.log(games)
console.log(games.size) //5
console.log(games.has('gta 5'))//false
console.log(games.has('Gta 5'))//true
games.delete('Far Cry 5')//ok
console.log(games.has('Far Cry 5'))//false

// direto com array
const nomes = ['Raquel', 'Lucas', 'Julia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)