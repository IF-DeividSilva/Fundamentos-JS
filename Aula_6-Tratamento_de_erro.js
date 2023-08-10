// --- Tratamento de ERRO ---
function tratarErro(erro) {
     //throw new ERROR('ERROR 404...')
     // throw 10
     // throw true
     // throw 'mensagem'
     throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}     
function imprimir(obj){
    try{
    console.log(obj.nçme.toUpperCase() + '!!!!!');
    } catch(e) {
        tratarErro(e)
    } finally {
        console.log('Finish him!'); 
    }
}   

const obj = { nome: 'Levoras R.'}
imprimir(obj)