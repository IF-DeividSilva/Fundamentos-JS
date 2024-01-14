/*
As regras para o cálculo dos anos bissextos são as seguintes: 
De 4 em 4 anos é ano bissexto; 
De 100 em 100 anos não é ano bissexto; 
De 400 em 400 anos é ano bissexto; 
Prevalecem as últimas regras sobre as primeiras. 
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a 
mensagem e retornando  true ou false
*/

function bissexto(val) { 
    if (val <= 0 )
        return false;
    else if (val % 400 == 0)
        return true;
    else if (val % 100 == 0) 
        return false;
    else if (val % 4 == 0)
        return true;
return false;    
}

console.log(bissexto(2014));
console.log(bissexto(2010));
console.log(bissexto(2007));




