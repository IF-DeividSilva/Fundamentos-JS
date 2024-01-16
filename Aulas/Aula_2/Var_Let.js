// Declaracao com var e let

// usando var
// a variavel var é visivel fora do bloco de codigo
{
    {
        {var a = "a"}
    }
}
console.log(a);

function teste(){
    var local = 123;
    console.log(local);
}
teste();
//console.log(local);
// só é visivel dentro da funcao

//* Variavel fora da funcao é global e deve ser evitado, pois a sobrescrita pode causar erros*/

var numero = 1;
{
    var numero = 2;
    console.log('dentro = ', numero);
}
console.log('fora = ', numero);

// usando let
// let tem escopo de bloco
let numero1 = 1;
{
    let numero1 = 2;
    console.log('usando let');
    console.log('dentro = ', numero1);
}
console.log('fora = ', numero1);


// loop com var
for(var i = 0; i < 10; i++){
    console.log(i);
}
// como foi usado o var o i é visivel fora do bloco
console.log('i = ', i);

// loop com let
for(let j = 0; j < 10; j++){
    console.log(j);
}   
// como foi usado o let o j não é visivel fora do bloco
//console.log('j = ', j);
//----------------------------------------------------------------

// var loop 2
console.log("---var 2--")
const funcs = [];

for (var k = 0; k < 10; k++){
    //add no array
    funcs.push(function(){
        console.log(k);
    })
}
// como foi usado o var ele imprimira o ultimo valor de k e nao os valores correspondentes
funcs[2]() //-> 10
funcs[8]() //-> 10
//--------------------------------------------------------------------------------------

// let loop 2
console.log("---let 2--")
const funcs1 = [];

for (let l = 0; l < 10; l++){
    //add no array
    funcs1.push(function(){
        console.log(l);
    })
}
// como foi usado o let ele imprimira os valores correspondentes
funcs1[2]() //-> 2
funcs1[8]() //-> 8