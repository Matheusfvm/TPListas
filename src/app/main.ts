import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa"
import CadastroCliente from "../negocio/cadastroCliente";
import CadastroProduto from "../negocio/cadastroProduto";
import CadastroServico from "../negocio/cadastroServico";
import InsereServicoProduto from "../negocio/insereServicoProduto";
import ListagemClientes from "../negocio/listagemClientes";
import ListagemConsumoProdutoGenero from "../negocio/listagemConsumoProdutoGenero";
import ListagemConsumoServicoGenero from "../negocio/listagemConsumoServicoGenero";
import ListagemProdutos from "../negocio/listagemProdutos";
import ListagemServico from "../negocio/listagemServicos";

console.log(`Bem-vindo ao sistema de agenda de clientes do Grupo World Beauty`)

let empresa = new Empresa()
let listaCliente = new ListagemClientes(empresa.getClientes)
let listaServico = new ListagemServico(empresa.getServicos)
let listaProdutos = new ListagemProdutos(empresa.getProdutos)
let cadastroCliente = new CadastroCliente(empresa.getClientes, empresa.getProdutos, empresa.getServicos)
let cadastroServico = new CadastroServico(empresa.getServicos)
let cadastroProduto = new CadastroProduto(empresa.getProdutos)
let configuraProdutoServico = new InsereServicoProduto(empresa.getServicos, empresa.getProdutos)
let listaConsumoProdutoGenero = new ListagemConsumoProdutoGenero(empresa.getClientes, empresa.getProdutos)
let listaConsumoServicoGenero = new ListagemConsumoServicoGenero(empresa.getClientes, empresa.getServicos)
configuraProdutoServico.cadastrar()
let execucao = true

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log(`3 - Cadastrar produto`);
    console.log(`4 - Listar todos os produtos`);
    console.log(`5 - Apagar um cliente`);
    console.log(`6 - Listar cliente por gênero`);
    console.log('7 - Listar todos os serviços')
    console.log('8 - Listar os 10 clientes que mais consumiram em quantidade')
    console.log('9 - Listar os 10 clientes que menos consumiram em quantidade')
    console.log('10 - Listar os 5 clientes que mais consumiram em valor')
    console.log('11 - Listar os 5 produtos mais consumidos')
    console.log('12 - Listar os 5 serviços mais consumidos')
    console.log('13 - Listar os 5 produtos mais consumidos por genero')
    console.log('14 - Listar os 5 serviços mais consumidos por genero')
    console.log('15 - Cadastro de serviço')

    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            cadastroCliente.cadastrar()
            break;
        case 2:
            listaCliente.listar()
            break;
        case 3:
            cadastroProduto.cadastrar()
            break;
        case 4:
            listaProdutos.listar()
            break;
        case 5:
        case 6:
            listaCliente.listaGenero()
            break;
        case 7:
            listaServico.listar()
            break;
        case 8:
            listaCliente.listagem10MaioresConsumidores()
            break;
        case 9:
            listaCliente.listagem10MenoresConsumidores()
            break;
        case 10:
            listaCliente.listagem5MaioresConsumidoresValor()
            break;
        case 11:
            listaProdutos.listagem5ProdutosMaisConsumidos()
            break;
        case 12:
            listaServico.listagem5ServicosMaisConsumidos()
            break;
        case 13:
            listaConsumoProdutoGenero.listar()
            break;
        case 14:
            listaConsumoServicoGenero.listar()
            break;
        case 15:
            cadastroServico.cadastrar()
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}