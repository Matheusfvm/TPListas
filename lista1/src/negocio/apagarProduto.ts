import Produto from "../modelo/produto";
import Entrada from "../io/entrada";
import Apagador from "./apagador";

export default class ApagarProduto extends Apagador {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor (produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada
    };
    public apagar (): void {
        console.log(`\nApagar produto`);
        let valorId = this.entrada.receberNumero(`Digite o ID do produto que será apagado: `);
        if (valorId > this.produtos.length || valorId === 0) {
            console.log(`Nenhum produto com esse ID\n`);
        } else if (valorId <= this.produtos.length) {
            let indexDoProduto = this.produtos.findIndex((produto) => {
                return produto.getId === valorId
            });
            if (indexDoProduto !== -1){
                this.produtos.splice(indexDoProduto, 1)
            };
            console.log(`\nProduto apagado com sucesso\n`)
        };
        
    };
};