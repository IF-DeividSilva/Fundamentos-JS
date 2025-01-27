const fs = require('fs')

const funcionario = {
    nome: 'Agostinho',
    salario: 1200,
    cargo: 'Gerente'
}

// Converte o objeto para JSON
fs.writeFile(__dirname +'/arqGerado.json', JSON.stringify(funcionario), err => {
    console.log(err || 'Arquivo salvo!')
})
