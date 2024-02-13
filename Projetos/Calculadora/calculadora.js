'use strict';

const display = document.getElementById('display'); // display da calculadora
const numeros = document.querySelectorAll('[id*=tecla]'); // usa todos os elementos que tem id que começa com tecla
const operadores = document.querySelectorAll('[id*=operador]'); // usa todos os elementos que tem id que começa com operador

let novoNumero = true; // para saber se é um novo número ou não
let operador;
let numeroAnterior;

const calcular = () => {
    if (operador !== undefined) {
        const numeroAtual = parseFloat(display.textContent);
        novoNumero = true;
        switch (operador) {
            case '+':
                atualizarDisplay(numeroAnterior + numeroAtual);
                break;
            case '-':
                atualizarDisplay(numeroAnterior - numeroAtual);
                break;
            case '*':
                atualizarDisplay(numeroAnterior * numeroAtual);
                break;
            case '/':
                atualizarDisplay(numeroAnterior / numeroAtual);
                break;
        }
    }
};

const atualizarDisplay = (texto) => {
    if (novoNumero) {
        display.textContent = texto;
        novoNumero = false;
    } else {
        display.textContent += texto;
    }
};

const adicionarNumero = (evento) => atualizarDisplay(evento.target.textContent); // manda o texto de cada tecla para mostrar no display
numeros.forEach(numero => numero.addEventListener('click', adicionarNumero)); // para cada número, adiciona um evento de click que chama a função adicionarNumero

const selecionarOperador = (evento) => {
    if (!novoNumero) {
        calcular();
        novoNumero = true;
        operador = evento.target.textContent;
        numeroAnterior = parseFloat(display.textContent);
    }
};
operadores.forEach(operador => operador.addEventListener('click', selecionarOperador)); // para cada operador, adiciona um evento de click que chama a função selecionarOperador

const ativarIgual = () => {
    calcular();
    operador = undefined;
};

document.getElementById('igual').addEventListener('click', ativarIgual);

const limparDisplay = () => display.textContent = '';
document.getElementById('limparDisplay').addEventListener('click', limparDisplay);

const limparCalculo = () => {
    limparDisplay();
    operador = undefined;
    novoNumero = true;
    numeroAnterior = undefined;
};

document.getElementById('limparCalculo').addEventListener('click', limparCalculo);

const removerUltimoNumero = () => display.textContent = display.textContent.slice(0, -1); // remove o último número  
document.getElementById('backspace').addEventListener('click', removerUltimoNumero);

const inverterSinal = () => {
    novoNumero = true;
    atualizarDisplay((parseFloat(display.textContent) * -1).toString()); // inverte o sinal do número
};

document.getElementById('inverter').addEventListener('click', inverterSinal);

const inserirDecimal = () => {
    if (novoNumero) {
        atualizarDisplay('0.');
    } else if (display.textContent.indexOf('.') === -1) {
        atualizarDisplay('.');
    }
};

document.getElementById('decimal').addEventListener('click', inserirDecimal);
