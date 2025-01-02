// coloca a função foreachimplements no prototype do array
// declara a função forEachImplements que recebe um callback como argumento

Array.prototype.forEachImplements = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
}

const numeros = [1, 2, 3, 4, 5]

numeros.forEachImplements((numero, indice) => {
    console.log(`Indice: ${indice+1}, Numero: ${numero}`);
});
