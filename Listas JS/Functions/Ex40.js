/*  40) Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
conceito B e de 9,0 a 10,0 o conceito A. */

function convert (n){
	if (n < 0){
		return "Numero invalido"
	}else if (n < 4.9){
		return "conceito D"
	}else if (n < 6.9){
		return "conceito C"
	}else if (n < 8.9){
		return "conceito B"
	}else if (n < 10){
		return "conceito A"
	}else {
		return "Numero invalido"
	}


}

console.log(convert(4.5))
console.log(convert(5.5))
console.log(convert(8.5))
console.log(convert(9.5))
