/*
06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
*/

function jurosSimples(CI, tx, tempo){
	const juros = CI * tx;
	const resultado = CI+(juros * tempo);
	return resultado;
}

function jurosCompostos(ci, tx, tempo){
	while(tempo != 0){
		juros = ci * tx;
	  ci = ci+ juros;
		tempo--
	}
	return ci;

}


console.log(jurosSimples(100, 10/100, 2));
console.log(jurosCompostos(100, 10/100, 2));
