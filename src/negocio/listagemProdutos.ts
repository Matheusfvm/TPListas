import Produto from "../modelo/produto";
import Listagem from "./listagem";

export default class ListagemProdutos extends Listagem {
    private produtos: Array<Produto>
    constructor(produtos: Array<Produto>){
        super()
        this.produtos = produtos
    }
    public listar(): void {
        console.log(`\nLista de todos os Produtos:`)
        this.produtos.forEach(produto => {// "forEach" passa por todos os elementos de um Array
            console.log(`Nome: ${produto.nome}`)
            console.log(`--------------------------------------`)
        })
        console.log(`\n`)
    }
}