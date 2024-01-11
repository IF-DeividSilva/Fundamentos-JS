//cria as variaveis com os elementos da calculadora
const calcular = document.getElementById('calcular');

function verificaCampos(nome, peso, altura) {
    // acessar propriedades do elemento usar .value
    if (nome  == '' && peso == '' && altura == '') {
        alert('Preencha os campos corretamente (vazio)...');
        resultado.textContent = 'Preencha os campos corretamente';
        return false;
    }else{
        return true;
    }    
}    

function imc (nome, peso, altura){
    const valorIMC = (peso / (altura* altura)).toFixed(1);
    let classificacao = '';
    if(valorIMC < 18.5){
        classificacao = 'abaixo do peso'
        resultado.textContent = 'IMC de' + nome +'é'+ valorIMC + ' e voce está' + classificacao;
    // entre 18.5 e 25
    }else if(valorIMC < 25){
        classificacao = 'com peso ideal';
    }else if(valorIMC < 30){
        classificacao = 'levemente acima do peso ideal';
    } else if(valorIMC < 35){
        classificacao = 'com obesidade grau I';
    } else if(valorIMC < 40){
        classificacao = 'com obesidade grau II';
    } else{
        classificacao = 'com obesidade grau III, PERIGO';
    }
    
    return ('IMC de ' + nome +' é '+ valorIMC + ' e voce está ' + classificacao);
}

function main() {
    //cria as variaveis com os elementos da calculadora
    const nome = document.getElementById('nome');
    const altura = document.getElementById('altura');
    const peso = document.getElementById('peso');
    teste = verificaCampos(nome.value,peso.value, altura.value);
    
    if (teste == true){
        resultado.textContent = imc(nome.value,peso.value, altura.value);
    }
    
}
calcular.addEventListener('click', main);


