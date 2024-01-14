// Faça um algoritmo que calcule o fatorial de um número.
function calcularFatorial(n) {
    if (n < 0) {
        return 'Não é possível calcular o fatorial de um número negativo.';
    }

    var fat = 1;
    var i = 1;

    while (i <= n) {
        fat *= i;
        i++;
    }

    return 'O fatorial é ' + fat;
}

console.log(calcularFatorial(2));
console.log(calcularFatorial(5));
