console.log(3 + 1);
let preco = 4.5;
console.log(1 + preco);

// --- AREA CIRCUNFERENCIA ---
// Pi * r * r

const pi = 3.141592;
let r = 10;
console.log(pi *(r*r), "Metros");

// com math //
const area = Math.PI * Math.pow(r, 2);
console.log(area);

//---String---//
const escola = "UTFPR";

console.log(escola.charAt(2));
console.log(escola.charCodeAt(1));
//console.log(escola.index0f('F'));

console.log(escola.substring(1));
console.log(escola.substring(0, 3));

console.log('Escola'.concat(escola).concat("!!"));
console.log(escola.replace(3, 'e'));

console.log('Ana, Maria, Pedro'.split(','));

//---Template String ---//

const nome = 'Jonh';
const concatenacao = 'Salve, Salve';
const template = `
    Ola
    ${nome}!`

    console.log(concatenacao, template);

    //*** expressoes ***
    console.log(`1 + 1 = ${1 + 1}`);

    const up = texto => texto.toUpperCase();
    console.log(`Ei... ${up('Cuidado')}!`);

    //---Booleano---//
    let isAtivo = false;
    console.log(isAtivo);

    isAtivo = true;
    console.log(isAtivo);
    
    isAtivo = 1;
    console.log(!!isAtivo);

    console.log('os verdadeiros...resumindo');
    console.log(!!3);
    console.log(!!-1);
    console.log(!!' ');
    console.log(!![]);
    console.log(!!{});
    console.log(!!Infinity);
    console.log(!!(isAtivo = true));

    console.log('os falsos...resumindo');
    console.log(!!0);
    console.log(!!'');
    console.log(!!null);
    console.log(!!NaN);
    console.log(!!undefined);
    console.log(!!(isAtivo = false));

//---- Array ---- //

    const valores = [5,2,4,9,0,6];
    console.log(valores[0], valores[5]);
    console.log(valores.length)//retorna o tamanho do vetor
    delete valores[0]//exclui o elemento

//---- Object ---- //
// é uma colecao de chave(indentificador unico) e valores, podendo ser texto ,numero ou funcao;
// pode ter um objeto dentro de outro;
// usado dinamicamente;

    const prod1 = {};//cria-se com um par de chaves "{}"
    prod1.nome = 'Celular Ultra Power';
    prod1.preco = 5999.90;
    prod1['Descontinho'] = 0.40; //evitat atributos com espaco

    console.log(prod1);

    const prod2 = {
        nome: 'Camiseta',
        preco: 78,
    }

    console.log(prod2)

// NULL --> significa que não aponta para nenhum endereço de memoria
// Undefined --> significa que nao foi inicializada

//----- FUNÇÃO -----
console.log(typeof Object);//---> OBJECT eh uma funçao

function imprimirSoma(a, b){
    console.log(a + b);
}

imprimirSoma(2,3);
imprimirSoma(9,5);

//com retorno 
function soma(a,b = 0){
    return a+b;
}
console.log(soma(6,8));

// Armazenando uma funcao em uma variavel
const imprimir_soma = function(a, b){
    console.log(a + b);
}
 imprimir_soma(2,3);

// Armazenado uma funcao arrow em uma variavel
const soma = (a, b) => {
    return a + b;
} 

console.log(soma(2,3))

//retorno implicito
const subtracao = (a, b) => a - b;
console.log(subtracao(2,3));