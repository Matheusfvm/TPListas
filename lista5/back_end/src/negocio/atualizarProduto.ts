import Produto from "../modelo/produto";
import Entrada from "../io/entrada";
import Atualizador from "./atualizador";

export default class AtualizarProduto extends Atualizador {
    private produtos: Array<Produto>;
    private entrada: Entrada;
    constructor (produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada;
    };
    public atualizar(): void {
        console.log(`\nAtualizar o cadastro do Produto`);
        let valorId = this.entrada.receberNumero(`Digite o ID do produto que será atualizado: `);
        if (valorId > this.produtos.length || valorId === 0) {
            console.log(`Nenhum produto com esse ID\n`)
        } else if (valorId <= this.produtos.length) {
            let indexDoProduto = this.produtos.findIndex((produto) => {
                return produto.getId === valorId
            });
            this.produtos[indexDoProduto].setNomeProduto = this.entrada.receberTexto(`Por favor informe o nome do produto: `);
            this.produtos[indexDoProduto].setPrecoProduto = this.entrada.receberNumero('Insira o preço do produto (use apenas números e "." para separar reais de centavos): ');
            console.log(`\nProduto Atualizado\n`);
        };
        
    };
};