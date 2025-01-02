const alunos = [
    { nome: 'Alice', idade: 18 },
    { nome: 'Bob', idade: 22 },
    { nome: 'Charlie', idade: 25 }
];

// modo imperativo
 // somaIdades = 0 -> inicializa a variável com 0
 // alunos[i].idade -> acessa a idade do aluno na posição i
 // somaIdades += alunos[i].idade -> soma a idade ao acumulador
 // i++ -> incrementa o contador
 // i < alunos.length -> verifica se ainda há alunos para percorrer
 // quando i for igual a alunos.length, o loop termina
let somaIdades = 0

for(let i = 0; i < alunos.length; i++){
    somaIdades += alunos[i].idade;
}

console.log('Soma das idades (imperativo):', somaIdades);

// modo declarativo usando map
 // reduce: executa uma função em cada elemento do array, reduzindo-o a um único valor.
 // acumulador: valor inicial do acumulador.
 // atual: valor do elemento atual.
 // 0: valor inicial do acumulador.
 // a.idade: função que será executada em cada elemento.
 // acumulador + atual: função de redução que soma os valores.

 const getAge = a => a.idade;
 const somaIdades2 = alunos.map(getAge).reduce((acumulador, atual) => acumulador + atual, 0);

console.log('Soma das idades (declarativo):', somaIdades2);

//conclusão:
// O modo declarativo é mais fácil de manter e de alterar.
// O modo declarativo é mais fácil de testar.
// O modo declarativo é mais fácil de reutilizar.
