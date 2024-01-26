// heranca 1
const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo:'V40',
    velMax: 200
}

console.log(ferrari.__proto__);
console.log(ferrari.__proto__ === Object.prototype);
console.log(volvo.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null);

function MeuObjeto(){}
console.log(typeof Object, typeof MeuObjeto);
console.log(Object.prototype, MeuObjeto.prototype);

// heranca 2 
const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B'}
const filho = {__proto__: pai, attr3: 'C'}
console.log(filho.attr1, filho.attr2, filho.attr3);

// heranca 3
const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta;
        }else{
            this.velAtual = this.velMax;
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari2 = {
    modelo: 'F40',
    velMax: 324 // shadowing
}

const volvo2 = {
    modelo:'V40',
    status(){
        return `${this.modelo}: ${super.status()}`;
    }
}

Object.setPrototypeOf(ferrari2, carro);
Object.setPrototypeOf(volvo2, carro);

console.log(ferrari2);
console.log(volvo2);

volvo2.acelerarMais(100);
console.log(volvo2.status());
ferrari2.acelerarMais(300);
console.log(ferrari2.status());

// heranca 4
const pai2 = {nome: 'Pedro', corCabelo: 'preto'}

const filha1 = Object.create(pai2);
filha1.nome = 'Ana';
console.log(filha1.corCabelo);

const filha2 = Object.create(pai2, {
    nome: {value: 'Bia', writable: false, enumerable: true}
})

console.log(filha2.nome);
filha2.nome = 'Carla';
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`);

console.log(Object.keys(filha1));
console.log(Object.keys(filha2));

// para verificar se o atributo pertence ao objeto ou foi herdado
for(let key in filha2){
    filha2.hasOwnProperty(key) ?
    console.log(key) : console.log(`Por heranca: ${key}`);
}

// heranca 5
function MeuObjeto2(){}
console.log(MeuObjeto2.prototype);

const obj1 = new MeuObjeto2;
const obj2 = new MeuObjeto2;
console.log(obj1.__proto__ === obj2.__proto__);
console.log(MeuObjeto2.prototype === obj1.__proto__);
// quando cria uma cria uma funcao construtora, o prototype dela aponta para a funcao.prototype

MeuObjeto2.prototype.nome = 'Anonimo';
MeuObjeto2.prototype.falar = function(){
    console.log(`Bom dia! Meu nome é ${this.nome}`);
}

obj1.falar();
obj2.nome = 'Rafael';
obj2.falar();
const obj3 = {};
obj3.__proto__ = MeuObjeto2.prototype;
obj3.nome = 'Obj3';
obj3.falar();

// resumindo
console.log((new MeuObjeto2).__proto__ === MeuObjeto2.prototype); //true
console.log(MeuObjeto2.__proto__ === Function.prototype); //true
console.log(Function.prototype.__proto__ === Object.prototype); //true
console.log(Object.prototype.__proto__ === null); //true

// heranca 6
console.log(typeof String);
console.log(typeof Array);
console.log(typeof Object);

String.prototype.reverse = function(){
    return this.split('').reverse().join('');
}

console.log('Escola Cod3r'.reverse());
Array.prototype.first = function(){
    return this[0];
}

console.log([1,2,3,4,5].first());
console.log(['a','b','c'].first());

String.prototype.toString = function(){
    return 'NAO FACA ISSO';
}

console.log('Escola Cod3r'.reverse());

// heranca 7 operador new
function Aula1(nome, videoID){
    this.nome = nome;
    this.videoID = videoID;
}

const aula1 = new Aula1('Bem vindo', 123);
console.log(aula1);

// simulando o new
function novo(f, ...params){
    const obj = {};
    obj.__proto__ = f.prototype;
    f.apply(obj, params);
    return obj;
}

const aula2 = novo(Aula1, 'Bem vindo', 123);
console.log(aula2);



