import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa"
import CadastroCliente from "../negocio/cadastroCliente";
import CadastroProduto from "../negocio/cadastroProfuto";
import ListagemClientes from "../negocio/listagemClientes";
import ListagemProdutos from "../negocio/listagemProdutos";

console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log(`3 - Cadastrar produto`);
    console.log(`4 - Listar todos os produtos`);
    console.log(`5 - Apagar um cliente`);
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let cadastro_cliente = new CadastroCliente(empresa.getClientes)// Ele retorna o array de clientes, no início ele está vazio mas depois ele vai retornar o array com os clientes já cadastrados 
            cadastro_cliente.cadastrar()
            break;
        case 2:
            let listagem_cliente = new ListagemClientes(empresa.getClientes)
            listagem_cliente.listar()
            break;
        case 3:
            let cadastro_produto = new CadastroProduto(empresa.getProdutos) 
            cadastro_produto.cadastrar()
            break;
        case 4:
            let listagem_produto = new ListagemProdutos(empresa.getProdutos)
            listagem_produto.listar()
            break;
        case 5:
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}