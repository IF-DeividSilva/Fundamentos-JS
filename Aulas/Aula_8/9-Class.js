// classe é convertida para uma função
class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo { // extends = herança
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome) // super = chama a função construtora da superclasse
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva') // chama o construtor da classe pai
    }
}

const filho = new Filho
console.log(filho) // Filho { sobrenome: 'Silva', profissao: 'Professor' }
