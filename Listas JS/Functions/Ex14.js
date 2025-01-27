/*
Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três 
casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com 
escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie 
também um default, que retornará uma mensagem de erro no console. 
*/

escolha = (fruta) => {
    switch(fruta){
        case('maçã'):
            return "Não vendemos esta fruta aqui\n"

        case('kiwi'):
            return "Estamos com escassez de kiwis\n"

        case('melancia'):
            return "Aqui está, são 3 reais o quilo\n"

    }   
    return "++ Erro opsao invalida ++\n"


}

console.log(escolha('melancia'))
console.log(escolha('maçã'))
console.log(escolha('uva'))
