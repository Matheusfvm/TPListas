import Produto from "../modelo/produto";
import Listagem from "./listagem";

export default class ListagemProdutos extends Listagem {
    private produtos: Array<Produto>
    constructor(produtos: Array<Produto>){
        super()
        this.produtos = produtos
    }
    public listar(): void {
        console.log(`\nLista de todos os Produtos:\n`)
        console.log(`--------------------------------------`)
        this.produtos.forEach(produto => {// "forEach" passa por todos os elementos de um Array
            console.log(`ID: ${produto.getId}`)
            console.log(`Nome: ${produto.getProduto}`)
            console.log(`Preço: R$ ${produto.getPreco}`)
            console.log(`--------------------------------------`)
        })
        console.log(`\nFim da lista\n`)
    }
}