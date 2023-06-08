import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";
import Atualizador from "./atualizador";
import Cliente from "../modelo/cliente";

export default class VinculaClienteServicoProduto extends Atualizador {
    private servicos: Array<Servico>;
    private produtos: Array<Produto>;
    private clientes: Array<Cliente>;
    private entrada: Entrada;
    constructor(servicos: Array<Servico>, produtos: Array<Produto>, clientes: Array<Cliente>) {
        super()
        this.servicos = servicos
        this.produtos = produtos
        this.clientes = clientes
        this.entrada = new Entrada()
    }

    public atualizar(): void {
        console.log(`\nConsumo do cliente`);
        let idDoCliente = this.entrada.receberNumero(`Digite o Id do cliente que comprou ou consumiu algum produto ou serviço: `);
        if (idDoCliente > this.clientes.length || idDoCliente === 0) {
            console.log(`Nenhum cliente com esse ID\n`);
        } else if (idDoCliente <= this.clientes.length) {            
            let indexDoCliente = this.clientes.findIndex((cliente) => {
                return cliente.getId === idDoCliente
            });
            let usaProduto = false;
            let usaServico = false;
            let consomeProduto = this.entrada.receberTexto(`O cliente comprou algum produto(sim ou nao)? `);
            if (consomeProduto === 's' || consomeProduto === 'sim') {
                usaProduto = true;
            };
            while (usaProduto) {
                let todosProdutos = this.clientes[indexDoCliente].getProdutosConsumidos;
                let idDoProduto = this.entrada.receberNumero(`Digite o Id do produto que o cliente comprou: `);
                if (idDoProduto > this.produtos.length || idDoProduto === 0) {
                    console.log(`Nenhum produto com esse ID\n`);
                    usaProduto = false;
                } else if (idDoProduto <= this.produtos.length) {
                    let indexDoProduto = this.produtos.findIndex((produto) => {
                        return produto.getId === idDoProduto
                    });
                    let idProduto = this.produtos[indexDoProduto].getId;
                    let precoProduto = this.produtos[indexDoProduto].getPreco;
                    let nomeProduto = this.produtos[indexDoProduto].getProduto;
                    let produtoComprado = new Produto (idProduto, nomeProduto, precoProduto);
                    todosProdutos.push(produtoComprado);
                    usaProduto = false;
                };
                let outroProduto = this.entrada.receberTexto(`O cliente comprou outro produto(sim ou nao)? `);
                if (outroProduto === 's' || outroProduto === 'sim') {
                    usaProduto = true;
                };
            };
            let consomeServico = this.entrada.receberTexto(`O cliente consumiu algum serviço(sim ou nao)? `);
            if (consomeServico === 's' || consomeServico === 'sim') {
                usaServico = true;
            };
            while (usaServico) {
                let todosServicos = this.clientes[indexDoCliente].getServicosConsumidos;
                let idDoServico = this.entrada.receberNumero(`Digite o Id do serviço que o cliente consumiu: `);
                if (idDoServico > this.servicos.length || idDoServico === 0) {
                    console.log(`Nenhum serviço com esse ID\n`);
                    usaServico = false;
                } else if (idDoServico <= this.servicos.length) {
                    let indexDoServico = this.servicos.findIndex((servico) => {
                        return servico.getId === idDoServico
                    });
                    let idServico = this.servicos[indexDoServico].getId;
                    let precoServico = this.servicos[indexDoServico].getPreco;
                    let nomeServico = this.servicos[indexDoServico].getServico;
                    let servicoComprado = new Servico (idServico, nomeServico, precoServico);
                    todosServicos.push(servicoComprado);
                    usaServico = false;
                };
                let outroServico = this.entrada.receberTexto(`O cliente consumiu outro serviço(sim ou nao)? `);
                if (outroServico === `s` || outroServico === `sim`) {
                    usaServico = true;
                };
            };
            
        }      
    }
}