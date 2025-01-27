// Uma factory retorna um novo objeto, ou seja, uma nova instância de um objeto.
module.exports = () => {
    return{
        valor: 1,
        inc(){
            this.valor++;
        }
    }
}