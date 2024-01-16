// Função em JS é First-Class Object (Citizens)
// Higher-order function

// Criar de forma literal
function fun1() { }

// Armazenar em uma variável
const fun2 = function () { } 

// Armazenar em um array
const array = [function (a, b) { return a + b }, fun1, fun2]

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Ueeepa' }
console.log(obj.falar())

// Passar função como parâmetro
function run(fun) {
    fun()
}

run(function () { console.log('Executando...') })

// Uma função pode retornar/conter uma função
/*function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}
soma(2, 3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)
*/
//----------------------------------------------------------------
// parametros e retornos são opcionais 

function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m2.`)
    } else {
        return area
    }
}
console.log(area(2, 2)) // 4
console.log(area(2)) // NaN
console.log(area()) // NaN
console.log(area(2, 3, 17, 22, 44)) // 6
console.log(area(5, 5)) // undefined

//----------------------------------------------------------------
// Parametros variaveis
function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma 
}
console.log(soma()) // 0
console.log(soma(1)) // 1
console.log(soma(1.1, 2.2, 3.3)) // 6.6
console.log(soma(1.1, 2.2, "Teste")) // 3.3000000000000003Teste
console.log(soma('a', 'b', 'c')) // 0abc

//----------------------------------------------------------------
// Parametros padroes
// estrategia 1 para gerar valor padrao
function soma1(a, b, c){
    // caso o valor seja nulo, ele vai assumir o valor padrao(dps do "ou")
    a=a || 1;
    b=b || 1;
    c=c || 1;
    return a+b+c;
}
console.log(soma1(), soma1(3), soma1(1,2,3), soma1(0,0,0)); // 3 5 6 3

// estrategia 2, 3 e 4 para gerar valor padrao
function soma2(a, b, c){
    a=a !== undefined ? a : 1;
    b=1 in arguments ? b : 1;
    c=isNaN(c) ? 1 : c; //tramento caso não seja um numero(int/float)
    return a+b+c;
}

console.log(soma2(), soma2(3), soma2(1,2,3), soma2(0,0,0)); // 3 5 6 0

// valor padrao do es2015
function soma3(a=1, b=1, c=1){
    return a+b+c;
}
console.log(soma3(), soma3(3), soma3(1,2,3), soma3(0,0,0)); // 3 5 6 0

//----------------------------------------------------------------
//-> o "this" pode variar dependendo da forma que foi chamada a função

// this e função bind
const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao);
    }
}
pessoa.falar(); // Bom dia!
const falar = pessoa.falar;
falar(); // undefined (conflito entre paradigmas: funcional e OO)
const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa(); // Bom dia!

function Pessoa(){
    this.idade = 0;
    //Resolvendo com self
    const self = this;
    setInterval(function () {
        self.idade = self.idade + 1;
        console.log (self.idade);
    //RESOLVENDO COM O BIND
    }/*bind(this)*/, 1000);
}
new Pessoa();

//----------------------------------------------------------------
// this e funcao arrow
// tem o intuito de criar funcoes de forma mais reduzida
//Criando uma funcao normalmente
let dobro = function(a){
    return 2*a;
}
// usando arrow
dobro = (a) => {
    return 2*a;
}
// usando arrow quando a função tem apenas uma linha
dobro = a => 2*a; //return implicito

console.log(dobro(Math.PI));
// outro exemplo
let ola = function(){
    return 'Ola';
}
ola = () => 'Ola';
ola = _ => 'Ola'; // possui parametro (JS permite)
console.log(ola()); 

// alguns testes para verficar as variações do this em funcoes "normais"
let comparaComThis = function (param){
    console.log(this === param);
}

comparaComThis(global);

const obj = {}
comparaComThis = comparaComThis.bind(obj);
comparaComThis(global);
comparaComThis(obj);

// teste na funcao arrow	
let comparaComThisArrow = param => console.log(this === param);
comparaComThisArrow(global);
//comparaComThisArrow(this);
comparaComThisArrow(module.exports)

//comparaComThisArrow = ccomparaComThisArrow.bind(obj)// n funciona
comparaComThisArrow(obj)
// Portando o this em uma funcao arrow é um this associado ao contexto
//no qual a função foi escrita, ou seja, não varia de forma alguma 
// nem mesmo com usando o bind.

// --------------------------------------------------------------------

// Funcoes anonimas
const soma = function (x, y){
    return x + y;
}

const imprimirResultado = function (a, b, operacao = soma){
    console.log(operacao(a, b));
}

imprimirResultado(3, 4);
imprimirResultado(3, 4, soma);
imprimirResultado(3, 4, function(x, y){
    return x - y;
})
//=> funcao arrow é sempre anonima
imprimirResultado(3, 4, (x, y) => x* y);

const pessoa2 = {
    falar: function (){
        console.log('Salvee');
    }
}

pessoa2.falar();

//----------------------------------------------------------------
// Funções Callbacks

const fabricantes = ["Mercedes", "Audi", "BMW"];

function imprimir1(nome, indice){
    console.log(`${indice+1}. ${nome}`);
}

fabricantes.forEach(imprimir1);
fabricantes.forEach(fabricante => console.log(fabricante));

// Mais exemplos
const notas1 = [6.6, 8.7, 5.8, 4.9, 4.3];

//-- sem callback--
let notasBaixas = [];
for (let i in notas1){
    if(notas1[i] < 7){
        notasBaixas.push(notas1[i]);
    }
}
console.log(notasBaixas);

// com callback
const notasBaixas2 = notas1.filter(function (nota){
    return nota < 7;
})

console.log(notasBaixas2);

// com callback + arrow
const notasMenor7 = nota => nota < 7;
const notasBaixas3 = notas1.filter(notasMenor7);
console.log(notasBaixas3);

//------------------------------------------------------------------------------------------------
// Funcoes contrutoras 
// semelhante as classes de outras linguagens

function Carro(velocidadeMaxima = 200, delta = 5){
    //atributo privado
    // dar preferencia por let
    let velocidadeAtual = 0;

    //metodo publico
    this.acelerar = function(){
        if (velocidadeAtual + delta <= velocidadeMaxima){ 
            velocidadeAtual += delta; 
        }else{
            velocidadeAtual = velocidadeMaxima;
        }
    }

    //metodo publico
    this.getVelocidadeAtual = function(){
        return velocidadeAtual;
    }
}
const unoComEscada = new Carro(350, 25);
unoComEscada.acelerar();
unoComEscada.acelerar();
unoComEscada.acelerar();
console.log(unoComEscada.getVelocidadeAtual());

const ferrari = new Carro;
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());

//----------------------------------------------------------------
// Tipos de declaração

// function declaration
// pode chama-la antes da declaração, pois o compilador ja pré carrega
// todas as functions
console.log(soma(3, 5));

function soma(x, y){
    return x + y;
}

// function expression
// salva em uma const
// não pode ser chamada antes da declaração

const sub = function (x,y){
    return x - y;
}
console.log(sub(5,9));

// named function expression
// pouco usada
// util apenas pra se localizar em um debug por exemplo

const mult = function mult(x, y){
    return x * y;
}
console.log(mult(5,9));

// Contexto lexico

const loja = 'global';

function minhaFuncao(){
    console.log(loja);
}
function tst(){
    const loja = 'local';
    minhaFuncao();
}
tst();


// CLOSURE
// É o escopo criado quando uma função é declarada
// Esse escopo permite a função acessar e manipular variaveis externas à função
// exemplo:

const x = 'Global';

function fora() {
    const x = 'Local';
    function dentro() {
        return x;
    }
    return dentro;
}

const myfunction = fora();
console.log(myfunction());

//------------------------------------------------------------------------------
// Funçãp Factory
// sempre retorna um objeto
// exemplo

function criarProduto(nome, preco) {
    return{
        nome,
        preco,
        desconto: 0.1
    }
}
console.log(criarProduto("Batata Gamer", 5000));
console.log(criarProduto("GoW", 59,99));

//------------------------------------------------------------------------------------------------

// IIFE -> Immediately Invoked Function Expression
// intuito de fugir do escopo global
// muito usado no browser

(function () {
    console.log('Será executado...');
    console.log('Foge do escopo global');
})()


//------------------------------------------------------------------------------
// Call e Apply 

// existem muitas formas de se chamar função.
// pode chamar uma função diretamente no escopo global 
// pode chamar uma função a partir de um objeto (Call e Apply)
// a diferença é só a passagem dos parâmetros.

function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`;
}

const produto = {
    nome: 'PS5',
    preco: 4599,
    desc: 0.15,
    getPreco
}

global.preco = 20;
global.desc = 0.1;

console.log(get.getPreco());
console.log(produto.getPreco());

const celular = {preco: 49999, desc: 0.20}

console.log(getPreco.call(celular));
console.log(getPreco.apply(celular));

console.log(getPreco.call(celular, 0.17, '$'));
console.log(getPreco.apply(global,[ 0.17, '$']));


