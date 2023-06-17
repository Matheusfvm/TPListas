import Entrada from "../io/entrada";
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
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import BancoDados from "../modelo/bancoDados";

const app = express();
app.use(cors({origin: 'http://localhost:3000'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const bd = new BancoDados()

console.log(`Bem-vindo ao sistema de agenda de clientes do Grupo World Beauty`)

/* let listaCliente = new ListagemClientes(empresa.getClientes); */
/* let listaServico = new ListagemServico(empresa.getServicos);
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
let execucao = true */



//==================== Cliente ====================

//Nessa rota preciso de um array de clientes com {id, nome, consumoQuantidade, consumoValor, genero}
app.get('/listaClientes', async (req, res) => {
  let id = req.body.id
  let dados = []
    //dados.forEach((dados)=>{resposta.push({dados.id, dados.nome, dados.consumoQuantidade, dados.consumoValor, dados.genero})})
  //res.send(dados)
  res.send('foi')
});


//Nessa rota preciso do nome, 
app.get('/alteraCliente/:id', (req, res)=>{
  let id = req.params.id
  //Função que pega os dados usando o id: {nome, sobrenome, cpf{numeroCpf, dataEmissao}, genero, rgs[{numeroRG, dataEmissao}], telefone[{ddd, numeroTelefone}], servicos[{servicoNome, consumo}](quantidade consumida pelo id), produto[{produtoNome, consumo}](quantidade consumida pelo id)}
  //res.send(dadosResgatados)
  res.send('foi')
});



app.post('/alteraCliente', (req, res)=>{
  // Recebe do front os seguintes dados: {nome, sobrenome, cpf{numeroCpf, dataEmissao}, genero, rgs[{numeroRG, dataEmissao}], telefone[{ddd, numeroTelefone}], servicos[{servicoNome, consumo}], produto[{produtoNome, consumo}]}
  let {id, nome, sobrenome, cpf, genero, rgs, telefone, servico, produto} = req.body 
  //função que faz o update usando os dados acima como parametro
  res.send('foi')
})

app.post('/cadastroCliente', (req, res)=>{
  // Recebe do front os seguintes dados: {nome, sobrenome, cpf{numeroCpf, dataEmissao}, genero, rgs[{numeroRG, dataEmissao}], telefone[{ddd, numeroTelefone}]
  // Função que insere esses dados acima
  res.send('foi')
  })

//==================== Produto ====================

//Nessa rota preciso de um array de Produtos com {id, produto, consumoHomem, consumoMulher, consumoTotal}
app.get('/listaProduto', (req, res)=>{
  res.send('foi')
})

app.post('/cadastroProduto', (req, res)=>{
  //Recebe do front os seguintes dados: produto e preço
  //Função que insere esses dados no banco
  res.send('foi')
})

//Preciso do produto e o preço atrelado ao id enviado pelo front
app.get('/alteraProduto/:id', (req, res)=>{
  let id = req.params.id
  //Função que pega o preço e o produto
  res.send('foi')
})

//Front vai enviar preço e produto o back precisa fazer a alteração
app.post('/alteraProduto', (req, res)=>{
  let {id, produto, preco} = req.body
  //função que faz o update usando os dados acima como parametro
  res.send('foi')
})

//==================== Serviço ====================

//Nessa rota preciso de um array de Serviço com {id, serviço, consumoHomem, consumoMulher, consumoTotal}
app.get('/listaServico', (req, res)=>{
  res.send('foi')
})

app.post('/cadastroServico', (req, res)=>{
  //Recebe do front os seguintes dados: servico e preço
  //Função que insere esses dados no banco
  res.send('foi')
})

//Preciso do serviço e o preço atrelado ao id enviado pelo front
app.get('/alteraServico/:id', (req, res)=>{
  let id = req.params.id
  //Função que pega o preço e o servico
  res.send('foi')
})

//Front vai enviar preço e serviço
app.post('/alteraServico', (req, res)=>{
  let {id, servico, preco} = req.body
  //função que faz o update usando os dados acima como parametro
  res.send('foi')
})


//===================== Configuração de porta =====================

app.listen(8000, () => {
    console.log('http://localhost8000/');
  });

// while (execucao) {
//     console.log(`Opções:`);
//     console.log(`1 - Cadastrar cliente`);
//     console.log(`2 - Listar todos os clientes`);
//     console.log(`3 - Listar cliente por gênero`);
//     console.log(`4 - Atualizar o cadastro do cliente`);
//     console.log(`5 - Vincular um produto e serviço ao cliente`);
//     console.log(`6 - Apagar um cliente`);
//     console.log(`7 - Cadastrar produto`);
//     console.log(`8 - Listar todos os produtos`);
//     console.log(`9 - Atualizar o cadastro do produto`);
//     console.log(`10 - Apagar um produto`);
//     console.log(`11 - Cadastro de serviço`);    
//     console.log(`12 - Listar todos os serviços`);
//     console.log(`13 - Atualizar o cadastro do serviço`);
//     console.log(`14 - Apagar um serviço`);
//     console.log(`15 - Listar os 10 clientes que mais consumiram em quantidade`);
//     console.log(`16 - Listar os 10 clientes que menos consumiram em quantidade`);
//     console.log(`17 - Listar os 5 clientes que mais consumiram em valor`);
//     console.log(`18 - Listar os 5 produtos mais consumidos`);
//     console.log(`19 - Listar os 5 serviços mais consumidos`);
//     console.log(`20 - Listar os 5 produtos mais consumidos por genero`);
//     console.log(`21 - Listar os 5 serviços mais consumidos por genero`);
//     console.log(`0 - Sair`);
