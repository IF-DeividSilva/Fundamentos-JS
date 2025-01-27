// um for com diversas estruturas -- array, string, map, set...

for (let letra of "God Of War"){
    console.log(letra)
}

const materias = ['Aoc', 'Asl', 'Lógica']
// conteudo
for (let diciplinas of materias){
    console.log(diciplinas)
}
// indices
for (let i in materias) {
    console.log(i)
}

const gamesMap = new Map([
    ['Red Dead', { zerado: true }],
    ['God of War', { zerado: true }],
    ['Agostinho 2', { zerado: false }]
])
// varios jeitos de usar
for (let game of gamesMap) {
    console.log(game)
}

for (let chave of gamesMap.keys()) {
    console.log(chave)
}

for (let valor of gamesMap.values()) {
    console.log(valor)
}

for (let [ch, vl] of gamesMap.entries()) {
    console.log(ch, vl)
}

const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
    console.log(letra)
}