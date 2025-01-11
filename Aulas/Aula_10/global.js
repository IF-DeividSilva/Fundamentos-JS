// console.log (global)
// Object.freeze --> para  deixar imutavel (const)
global.meuApp = Object.freeze({
    saudacao() {
        return 'Hello, world!'
    },
    nome: 'Minha Aplicação'
})
