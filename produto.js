class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
        this.anterior = null;
        this.proximo = null;
    }
}

module.exports = Produto;