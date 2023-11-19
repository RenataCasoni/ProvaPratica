class Lista {
    constructor() {
        this.inicio = null;
    }

    inicializarLista() {
        this.inicio = null;
    }

    inserirProdutoOrdenado(novoProduto) {
        if (this.inicio === null) {
            this.inicio = novoProduto;
            novoProduto.anterior = novoProduto;
            novoProduto.proximo = novoProduto;
        } else {
            let atual = this.inicio;
            let anterior = null;

         
            while (atual.nome.localeCompare(novoProduto.nome) < 0 && atual.proximo !== this.inicio) {
                anterior = atual;
                atual = atual.proximo;
            }

            
            if (anterior === null) { 
                novoProduto.proximo = atual;
                novoProduto.anterior = atual.anterior;
                atual.anterior.proximo = novoProduto;
                atual.anterior = novoProduto;
                this.inicio = novoProduto;
            } else if (atual.proximo === this.inicio) { 
                novoProduto.proximo = this.inicio;
                novoProduto.anterior = atual;
                atual.proximo = novoProduto;
                this.inicio.anterior = novoProduto;
            } else { 
                novoProduto.proximo = atual;
                novoProduto.anterior = anterior;
                anterior.proximo = novoProduto;
                atual.anterior = novoProduto;
            }
        }
    }

    excluirProduto(nome) {
        if (this.inicio === null) {
            console.log("A lista de produtos está vazia.");
            return;
        }

        let atual = this.inicio;
        let anterior = null;
        let encontrado = false;

        
        do {
            if (atual.nome === nome) {
                encontrado = true;
                break;
            }
            anterior = atual;
            atual = atual.proximo;
        } while (atual !== this.inicio);

        if (encontrado) {
            
            if (anterior === null) { 
                if (atual.proximo === this.inicio) { 
                    this.inicio = null;
                } else {
                    anterior = atual.anterior;
                    anterior.proximo = atual.proximo;
                    atual.proximo.anterior = anterior;
                    this.inicio = atual.proximo;
                }
            } else { 
                anterior.proximo = atual.proximo;
                atual.proximo.anterior = anterior;
                if (atual === this.inicio) {
                    this.inicio = atual.proximo;
                }
            }
            console.log("Produto excluído com sucesso.");
        } else {
            console.log("Produto não encontrado.");
        }
    }

    consultarProduto(nome) {
        if (this.inicio === null) {
            console.log("A lista de produtos está vazia.");
            return;
        }

        let atual = this.inicio;
        let encontrado = false;

        
        do {
            if (atual.nome === nome) {
                encontrado = true;
                break;
            }
            atual = atual.proximo;
        } while (atual !== this.inicio);

        if (encontrado) {
            console.log("Produto encontrado:");
            console.log(`Nome: ${atual.nome}`);
            console.log(`Preço: ${atual.preco.toFixed(2)}`);
        } else {
            console.log("Produto não encontrado.");
        }
    }

    imprimirLista() {
        if (this.inicio === null) {
            console.log("A lista de produtos está vazia.");
            return;
        }

        let atual = this.inicio;

        console.log("Lista de Produtos:");
        do {
            console.log(`Nome: ${atual.nome}, Preço: ${atual.preco.toFixed(2)}`);
            atual = atual.proximo;
        } while (atual !== this.inicio);
    }

    imprimirListaReverso() {
        if (this.inicio === null) {
            console.log("A lista de produtos está vazia.");
            return;
        }

        let atual = this.inicio.anterior;

        console.log("Lista de Produtos (Reversa):");
        do {
            console.log(`Nome: ${atual.nome}, Preço: ${atual.preco.toFixed(2)}`);
            atual = atual.anterior;
        } while (atual !== this.inicio.anterior);
    }
}

module.exports = Lista;