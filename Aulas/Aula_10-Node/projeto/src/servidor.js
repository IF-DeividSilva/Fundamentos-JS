// configurando o fremework express

const porta = 3003  //declarando a porta (processo dentro do pc)
// a porta é usada para a placa de rede do computador saber qual processo está sendo acessado

const express = require('express') // importando o express
const app = express() // criando uma instância do express
const bofyParse = require('body-parser') // importando o body-parser
const bancoDados = require('./bancoDados') // importando o banco de dados

app.use(bofyParse.urlencoded({ extended: true })) // configurando o body-parser para interpretar os dados da requisição

app.get('/produtos', (requisicao, resposta, next) =>{
    resposta.send(bancoDados.getProdutos()) // enviando a resposta para o cliente
    
    console.log('Middleware 1...')
    //next()
})
app.get('/produtos/:id', (requisicao, resposta, next) =>{
    resposta.send(bancoDados.getProduto(requisicao.params.id)) // enviando a resposta para o cliente
})

app.post('/produtos', (requisicao, resposta, next) => {
    const produto = bancoDados.salvarProduto({ // enviando o produto para ser salvo
        nome: requisicao.body.nome, // especificando o nome do produto
        preco: requisicao.body.preco // especificando o preco do produto
    })
    resposta.send(produto) // enviando a resposta para o cliente
})


app.delete('/produtos/:id', (requisicao, resposta, next) => { 
    const produto = bancoDados.excluirProduto(requisicao.params.id) // excluindo o produto
    resposta.send(produto) // enviando a resposta para o cliente
})
app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`)
}) // iniciando o servidor na porta especificada (3003) e exibindo uma mensagem no console
