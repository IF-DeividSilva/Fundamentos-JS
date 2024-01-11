/*
10) ​Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true 
ou false
*/

function verificar(n){
    if (n%3 == 0)
        return true;
    else
        return false;    
}


console.log (verificar(30));
console.log (verificar(10));
console.log (verificar(150));