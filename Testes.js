let a = 3

global.b = 123

this.c = 456
this.d = false
this.e = 'testando'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

// criando uma variavel sem var e sem let
abc = 123 // fica altomaticamente global**
console.log(global.abc)

// module.exports = {e: 654, f: false, g: 'teste'}
