import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa"
import ApagarCliente from "../negocio/apagarCliente";
import ApagarProduto from "../negocio/apagarProduto";
import ApagarServico from "../negocio/apagarServico";
import AtualizarProduto from "../negocio/atualizarProduto";
import AtualizarCliente from "../negocio/atualizarCliente";
import AtualizarServico from "../negocio/atualizarServico";
import CadastroCliente from "../negocio/cadastroCliente";
import CadastroProduto from "../negocio/cadastroProduto";
import CadastroServico from "../negocio/cadastroServico";
import ListagemClientes from "../negocio/listagemClientes";
import ListagemConsumoProdutoGenero from "../negocio/listagemConsumoProdutoGenero";
import ListagemConsumoServicoGenero from "../negocio/listagemConsumoServicoGenero";
import ListagemProdutos from "../negocio/listagemProdutos";
import ListagemServico from "../negocio/listagemServicos";
import VinculaClienteServicoProduto from "../negocio/VinculaClienteServicoProduto";

console.log(`Bem-vindo ao sistema de agenda de clientes do Grupo World Beauty`)

let empresa = new Empresa()
let listaCliente = new ListagemClientes(empresa.getClientes);
let listaServico = new ListagemServico(empresa.getServicos);
let listaProdutos = new ListagemProdutos(empresa.getProdutos);
let cadastroCliente = new CadastroCliente(empresa.getClientes);
let cadastroServico = new CadastroServico(empresa.getServicos);
let cadastroProduto = new CadastroProduto(empresa.getProdutos);
let atualizaCliente = new AtualizarCliente(empresa.getClientes);
let atualizaProduto = new AtualizarProduto(empresa.getProdutos);
let atualizaServico = new AtualizarServico(empresa.getServicos);
let vendeProdutoServico = new VinculaClienteServicoProduto(empresa.getServicos, empresa.getProdutos, empresa.getClientes);
let apagaCliente = new ApagarCliente(empresa.getClientes);
let apagaProduto = new ApagarProduto(empresa.getProdutos);
let apagaServico = new ApagarServico(empresa.getServicos);
let listaConsumoProdutoGenero = new ListagemConsumoProdutoGenero(empresa.getClientes, empresa.getProdutos);
let listaConsumoServicoGenero = new ListagemConsumoServicoGenero(empresa.getClientes, empresa.getServicos);
let execucao = true

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log(`3 - Listar cliente por gênero`);
    console.log(`4 - Atualizar o cadastro do cliente`);
    console.log(`5 - Vincular um produto e serviço ao cliente`);
    console.log(`6 - Apagar um cliente`);
    console.log(`7 - Cadastrar produto`);
    console.log(`8 - Listar todos os produtos`);
    console.log(`9 - Atualizar o cadastro do produto`);
    console.log(`10 - Apagar um produto`);
    console.log(`11 - Cadastro de serviço`);    
    console.log(`12 - Listar todos os serviços`);
    console.log(`13 - Atualizar o cadastro do serviço`);
    console.log(`14 - Apagar um serviço`);
    console.log(`15 - Listar os 10 clientes que mais consumiram em quantidade`);
    console.log(`16 - Listar os 10 clientes que menos consumiram em quantidade`);
    console.log(`17 - Listar os 5 clientes que mais consumiram em valor`);
    console.log(`18 - Listar os 5 produtos mais consumidos`);
    console.log(`19 - Listar os 5 serviços mais consumidos`);
    console.log(`20 - Listar os 5 produtos mais consumidos por genero`);
    console.log(`21 - Listar os 5 serviços mais consumidos por genero`);
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
            listaCliente.listaGenero()
            break;
        case 4:
            atualizaCliente.atualizar()
            break;
        case 5:
            vendeProdutoServico.atualizar()
            break;
        case 6:
            apagaCliente.apagar()
            break;
        case 7:
            cadastroProduto.cadastrar()
            break;
        case 8:
            listaProdutos.listar()
            break;
        case 9:
            atualizaProduto.atualizar()
            break;
        case 10:            
            apagaProduto.apagar()
            break;
        case 11:
            cadastroServico.cadastrar()
            break;
        case 12:
            listaServico.listar()
            break;
        case 13:
            atualizaServico.atualizar()
            break;
        case 14:
            apagaServico.apagar()
            break;
        case 15:
            listaCliente.listagem10MaioresConsumidores()
            break;
        case 16:
            listaCliente.listagem10MenoresConsumidores()
            break;
        case 17:
            listaCliente.listagem5MaioresConsumidoresValor()
            break;
        case 18:
            listaProdutos.listagem5ProdutosMaisConsumidos()
            break;
        case 19:
            listaServico.listagem5ServicosMaisConsumidos()
            break;
        case 20:
            listaConsumoProdutoGenero.listar()
            break;
        case 21:
            listaConsumoServicoGenero.listar()
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    };
};