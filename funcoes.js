// alguns testes para verficar as variações do this em funcoes "normais"
	let comparaComThis = function (param){
		console.log(this === param);
	}
	
	comparaComThis(global);
	
	const obj = {}
	comparaComThis = comparaComThis.bind(obj);
	comparaComThis(global);
	comparaComThis(obj);
	
// teste na funcao arrow	
	let comparaComThisArrow = param => console.log(this === param);
	comparaComThisArrow(global);
	//comparaComThisArrow(this);
	comparaComThisArrow(module.exports)
	
	//comparaComThisArrow = ccomparaComThisArrow.bind(obj)// n funciona
	comparaComThisArrow(obj)
// Portando o this em uma funcao arrow é um this associado ao contexto
//no qual a função foi escrita, ou seja, não varia de forma alguma 
// nem mesmo com usando o bind.

// --------------------------------------------------------------------

// Funcoes anonimas
	const soma = function (x, y){
		return x + y;
}

	const imprimirResultado = function (a, b, operacao = soma){
		console.log(operacao(a, b));
	}

	imprimirResultado(3, 4);
	imprimirResultado(3, 4, soma);
	imprimirResultado(3, 4, function(x, y){
		return x - y;
	})
//=> funcao arrow é sempre anonima
	imprimirResultado(3, 4, (x, y) => x* y);
	
	const pessoa = {
		falar: function (){
			console.log('Salvee');
		}
	}
	
	pessoa.falar();
