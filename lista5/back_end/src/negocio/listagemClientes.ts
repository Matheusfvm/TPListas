import Cliente from "../modelo/cliente";
import Listagem from "./listagem";
import BancoDados from "../modelo/bancoDados";


export default class ListagemClientes extends Listagem {
    // private clientes: Cliente
    private conexao: BancoDados
    constructor() {
        super()
        this.conexao = new BancoDados()
        // this.clientes = clientes
    }
    public listar(): void {

    }

    public async listarDadosCliente(id: string) {
        await this.conexao.conectar()
        let cliente = await this.conexao.query(
        `SELECT cliente_nome AS nome, cliente_nome_social AS nomeSocial, cliente_cpf AS numeroCpf, cliente_cpf_data AS dataEmissao 
        FROM cliente WHERE cliente_codigo = ${id};`
        ) as Array<any>;
        let rg = await this.conexao.query(
        `SELECT rg_numero AS numeroRG, rg_data_emissao AS rgDataEmissao from rg WHERE cliente_codigo = ${id};`
        ) as Array<any>;
        let telefone = await this.conexao.query(
        `SELECT telefone_ddd AS ddd, telefone_numero AS numeroTelefone from telefone WHERE cliente_codigo = ${id};`
        ) as Array<any>;
        let consumoServico = await this.conexao.query(`SELECT s.servico_nome AS servicoNome, count(cs.servico_codigo) AS consumo 
        FROM servico s LEFT JOIN consumo_servico cs ON s.servico_codigo = cs.servico_codigo AND cs.cliente_codigo = ${id} 
        GROUP AND s.servico_nome;`) as Array<any>;;
        let consumoProduto = await this.conexao.query(
        `SELECT p.produto_nome as produtoNome, count(cp.produto_codigo) AS consumo
        FROM produto p 
            LEFT JOIN consumo_produto cp ON p.produto_codigo = cp.produto_codigo AND cp.cliente_codigo = ${id}
        GROUP BY p.produto_nome;`
        ) as Array<any>;;
        cliente.push(rg, telefone, consumoServico, consumoProduto)
        await this.conexao.desconectar()
        return cliente
    }
    

    // public listaClienteNomeId(){
    //     this.clientes.forEach((cliente) => {
    //         if(cliente.nomeSocial !== ''){
    //             console.log(`${cliente.getId} ${cliente.nomeSocial}`)
    //         }
    //         else{
    //             console.log(`${cliente.getId} ${cliente.nome}`)
    //         }
    //     })
    // }

    // public listaGenero(){
    //     console.log("MASCULINO")
    //     this.clientes.forEach((cliente)=>{
    //         if(cliente.getGenero === 'masculino'){
    //             if(cliente.nomeSocial !== ''){
    //                 console.log(`${cliente.getId} ${cliente.nomeSocial}`)
    //             }
    //             else{
    //                 console.log(`${cliente.getId} ${cliente.nome}`)
    //             }
    //         }
    //     })
    //     console.log("\nFEMININO")
    //     this.clientes.forEach((cliente)=>{
    //         if(cliente.getGenero === 'feminino'){
    //             if(cliente.nomeSocial !== ''){
    //                 console.log(`${cliente.getId} ${cliente.nomeSocial}`)
    //             }
    //             else{
    //                 console.log(`${cliente.getId} ${cliente.nome}`)
    //             }
    //         }
    //     })
    //     console.log("\nNÃO INFORMADO")
    //     this.clientes.forEach((cliente)=>{
    //         if(cliente.getGenero === 'não informado'){
    //             if(cliente.nomeSocial !== ''){
    //                 console.log(`${cliente.getId} ${cliente.nomeSocial}`)
    //             }
    //             else{
    //                 console.log(`${cliente.getId} ${cliente.nome}`)
    //             }
    //         }
    //     })
    //     console.log(`\n`);
    // }

    // public listagem10MaioresConsumidores() {
    //     let linhaClientes:any = []
    //     this.clientes.forEach((cliente) =>{
    //         let id = cliente.getId
    //         let nome:string
    //         if (cliente.nomeSocial !== ''){
    //             nome = cliente.nomeSocial
    //         }
    //         else{
    //             nome = cliente.nome
    //         }
    //         let consumo = cliente.getProdutosConsumidos.length + cliente.getServicosConsumidos.length
    //         let linhaCliente = {
    //             id:id,
    //             nome:nome,
    //             consumo:consumo
    //         }
    //         linhaClientes.push(linhaCliente)
    //     })
    //     linhaClientes.sort(function(a, b){return b.consumo - a.consumo})
    //     let contador = 1
    //     linhaClientes.forEach((linha)=>{
    //         if(contador <= 10){
    //             contador += 1
    //             console.log(`${linha.id} | ${linha.nome} | Quantidade de itens consumidos: ${linha.consumo}`)
    //         }
    //     })
    // }

    // public listagem5MaioresConsumidoresValor() {
    //     let linhaClientes:any = []
    //     this.clientes.forEach((cliente) =>{
    //         let id = cliente.getId
    //         let nome:string
    //         if (cliente.nomeSocial !== ''){
    //             nome = cliente.nomeSocial
    //         }
    //         else{
    //             nome = cliente.nome
    //         }
    //         let valor = 0
    //         cliente.getProdutosConsumidos.forEach((produto)=>{
    //             valor += produto.getPreco
    //         })
    //         cliente.getServicosConsumidos.forEach((servico)=>{
    //             valor += servico.getPreco
    //         })
    //         let linhaCliente = {
    //             id:id,
    //             nome:nome,
    //             consumo:valor
    //         }
    //         linhaClientes.push(linhaCliente)
    //     })
    //     linhaClientes.sort(function(a, b){return b.consumo - a.consumo})
    //     let contador = 1
    //     linhaClientes.forEach((linha)=>{
    //         if(contador <= 5){
    //             contador += 1
    //             console.log(`${linha.id} | ${linha.nome} | Valor consumidos: ${linha.consumo}`)
    //         }
    //     })
    // }

    // public listagem10MenoresConsumidores() {
    //     let linhaClientes:any = []
    //     this.clientes.forEach((cliente) =>{
    //         let id = cliente.getId
    //         let nome:string
    //         if (cliente.nomeSocial !== ''){
    //             nome = cliente.nomeSocial
    //         }
    //         else{
    //             nome = cliente.nome
    //         }
    //         let consumo = cliente.getProdutosConsumidos.length + cliente.getServicosConsumidos.length
    //         let linhaCliente = {
    //             id:id,
    //             nome:nome,
    //             consumo:consumo
    //         }
    //         linhaClientes.push(linhaCliente)
    //     })
    //     linhaClientes.sort(function(a, b){return a.consumo - b.consumo})
    //     let contador = 1
    //     linhaClientes.forEach((linha)=>{
    //         if(contador <= 10){
    //             contador += 1
    //             console.log(`${linha.id} | ${linha.nome} | Quantidade de itens consumidos: ${linha.consumo}`)
    //         }
    //     })
    // }

}