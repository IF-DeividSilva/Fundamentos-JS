// pessoa aponta para o endereço do objeto
// pode ser usado const, caso o endereço nao mude
// os dados que estão no endereço podem ser alterados

const pessoa = {nome: 'Kratos'};
pessoa.nome = 'O Bom de Guerra';
console.log(pessoa);

// congelar objeto, não pode alterar o obj apos essa linha
Object.freeze(pessoa);

pessoa.nome = 'Zé da manga';
pessoa.endereco = 'Middigard';
delete pessoa.nome;

console.log(pessoa.nome);
console.log(pessoa);

// o obj pode ser criado como const tbm
const pessoaConst = Object.freeze({nome : 'Baldur' });
pessoaConst.nome = 'Baldurs Gate';
console.log(pessoaConst);