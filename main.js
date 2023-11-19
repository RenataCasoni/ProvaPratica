const readlineSync = require('readline-sync');
const Lista = require('./lista');
const Produto = require('./produto');


function main() {
    const listaProdutos = new Lista();
    listaProdutos.inicializarLista();

    let opcao;
    let nome;
    let preco;

    do {

        console.log("\nMenu:");
        console.log("1. Inserir produto");
        console.log("2. Excluir produto");
        console.log("3. Consultar produto");
        console.log("4. Imprimir lista");
        console.log("5. Imprimir lista reversa");
        console.log("0. Sair");
        opcao = parseInt(readlineSync.question("Escolha uma opcao: "));

        switch (opcao) {
            case 1:
                nome = readlineSync.question("Digite o nome do produto: ");
                preco = parseFloat(readlineSync.question("Digite o preço do produto: "));
                listaProdutos.inserirProdutoOrdenado(new Produto(nome, preco));
                break;

            case 2:
                nome = readlineSync.question("Digite o nome do produto a ser excluído: ");
                listaProdutos.excluirProduto(nome);
                break;

            case 3:
                nome = readlineSync.question("Digite o nome do produto a ser consultado: ");
                listaProdutos.consultarProduto(nome);
                break;

            case 4:
                listaProdutos.imprimirLista();
                break;

            case 5:
                listaProdutos.imprimirListaReverso();
                break;

            case 0:
                console.log("Saindo do programa. Liberando memória...");
                              while (listaProdutos.inicio !== null) {
                    let temp = listaProdutos.inicio;
                    listaProdutos.inicio = listaProdutos.inicio.proximo;
                    temp = null; 
                }
                break;

            default:
                console.log("Opção inválida. Tente novamente.");
        }
    } while (opcao !== 0);
}

main();