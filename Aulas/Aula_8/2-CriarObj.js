// usando notaçao literal
const obj1 = {};
console.log(obj1);

// Usando object em JS
console.log(typeof Object, typeof new Object);
const obj2 = new Object();
console.log(obj2);

// Funcoes contrutoras 
function Produto (nome, preco, desc) {
    this.nome = nome;
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc);  
    }
}

const p1 = new Produto('Caneta', 8, 0.45);
const p2 = new Produto('Caderno', 28, 0.05);
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto());

// Função Factory
function criarFuncionario (nome, salarioBase, faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) *(30 - faltas);
        }
    }
}

const f1 = criarFuncionario('Bond Guerra', 7900, 4);
const f2 = criarFuncionario('Loki', 9950, 14);
console.log(f1.getSalario(), f2.getSalario());


// Object.create
const filha = Object.create(null);
filha.nome = 'Ana';
console.log(filha);

// Uma funcao que retorna objeto
const fromJSON = JSON.parse('{"info": "GOW GOW GOW GOW"}')
console.log(fromJSON.info);

 

