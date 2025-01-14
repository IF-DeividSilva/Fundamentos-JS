// configurando o fremework express

const porta = 3003  //declarando a porta (processo dentro do pc)
// a porta é usada para a placa de rede do computador saber qual processo está sendo acessado

const express = require('express') // importando o express
const app = express() // criando uma instância do express

app.get('/produtos', (requisicao, resposta, next) =>{
    console.log('Middleware 1...')
    next()
})
app.get('/produtos', (requisicao, resposta, next) =>{
    resposta.send({nome: 'Notebook', preco: 123.45}) 
})

app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`)
}) // iniciando o servidor na porta especificada (3003) e exibindo uma mensagem no console
