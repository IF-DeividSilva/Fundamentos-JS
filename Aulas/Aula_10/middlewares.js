// middleware pattern (chain of responsability)
const passo1 = (contexto, next) => {
    contexto.valor1 = 'middleware 1'
    next()
}

const passo2 = (contexto, next) => {
    contexto.valor2 = 'middleware 2'
    next()
}

const passo3 = (contexto, next) => {
    contexto.valor3 = 'middleware 3'
}

const exec = (ctx, ...middlewares) => {
    const execPasso = indice => {
        middlewares && indice < middlewares.length && 
            middlewares[indice](ctx, () => execPasso(indice + 1)) // chama ela mesma com +1 de indice (recursao)
    }
    execPasso(0)
}

const contexto = {}
exec(contexto, passo1, passo2, passo3)

console.log(contexto) // { valor1: 'middleware 1', valor2: 'middleware 2', valor3: 'middleware 3' }