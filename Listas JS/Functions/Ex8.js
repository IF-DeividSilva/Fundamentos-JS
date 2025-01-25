/*
​Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém 
registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o 
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2 
pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um 
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior 
jogo. (Número do pior jogo). 

Obs.: O primeiro jogo não conta como novo recorde do melhor.  
Exemplo:  
String: “10 20 20 8 25 3 0 30 1” 
Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação 
aconteceu no sétimo jogo.)

*/

compara = (list) => {
    let listArray = list.split(' ') // Transforma a string em um array 
    const listArrayN = listArray.map(Number) // Transforma os elementos do array em números
    let recorde = 0
    let pior = 0
    let recordeAtual = 0
    let piorAtual = 0
    let tam = listArrayN.length

    for (let i = 0; i < tam ; i++){
        //ignora o primeiro
        if (i ===0){
            recordeAtual = listArrayN[i]
            pior = listArrayN[i]
        }
        // caso bata o recorde
        if(listArrayN[i] > recordeAtual){
            recordeAtual = listArrayN[i]
            recorde++
        }
        // caso seja o pior
        if (listArrayN < piorAtual){
            piorAtual = listArrayN[i]
            pior = i
        }

    }
    return [recorde, pior]
} 

String =  "10 20 20 8 25 3 0 30 1"
console.log(compara(String))