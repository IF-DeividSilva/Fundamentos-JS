const fs = require('fs')

const caminho = __dirname + '/arq.json'

// sincrono 
const conteudo = fs.readFileSync(caminho, 'utf-8')

// assincrono
// passa callback function 
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

// convertendo o arquivo json para objeto direto
const config = require('./arq.json')
console.log(config.db)

// leitura de pasta
fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos)
})
