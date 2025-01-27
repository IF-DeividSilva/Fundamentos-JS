const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'// database de funcionarios
const axios = require('axios') // importa o axios


// Faz uma requisicao GET na URL do banco de dados
// e retorna a lista de funcionarios
// e imprime no console

//axios.get(url).then(response => {
//    const funcionarios = response.data
//    console.log(funcionarios)
//})

// Desafio --> Encontra mulher chinesa com menor salario


const chineses = f => f.pais === 'China' // Funcao para filtrar chineses
const mulher = f => f.genero === 'F' // Funcao para filtrar mulheres
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
} // Funcao para encontrar menor salario

axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios)
    const func = funcionarios
        .filter(chineses)
        .filter(mulher)
        .reduce(menorSalario)
    console.log(func)
})