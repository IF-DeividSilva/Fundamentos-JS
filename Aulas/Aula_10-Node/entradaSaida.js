const anonimo =  process.argv.indexOf('-a') !== -1 // se o argumento -a for passado, a variável anonimo será true
// console.log(anonimo)

if(anonimo) {
    process.stdout.write('Hello Anônimo!\n') // escreve na tela
    process.exit() // encerra o processo
}else {
    process.stdout.write('Informe o seu nome: ') // escreve na tela
    process.stdin.on('data', data => { // espera a entrada de dados
        const nome = data.toString().replace('\n', '') // converte o buffer para string e remove a quebra de linha
        process.stdout.write(`Hello ${nome}!\n`) // escreve na tela
        process.exit() // encerra o processo
    })
}
