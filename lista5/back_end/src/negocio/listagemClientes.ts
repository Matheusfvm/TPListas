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

    public async listagemConsumoProduto(){
        await this.conexao.conectar()
        let consulta = await this.conexao.query(`
        SELECT c.cliente_codigo AS id, c.cliente_nome AS nome,
        count(cp.produto_codigo) + count(cs.servico_codigo) AS consumoQuantidade, COALESCE(SUM(cp.con_prod_preco), 0.00) + COALESCE(SUM(cs.con_serv_preco), 0.00) AS consumoValor, c.cliente_genero as genero
        FROM cliente c 
            left join consumo_produto cp on c.cliente_codigo = cp.cliente_codigo
            left join consumo_servico cs on c.cliente_codigo = cs.cliente_codigo
        group by c.cliente_codigo;`) as Array<any>
        await this.conexao.desconectar() 
        return consulta[0]
    }

    public async listaCliente(){
        await this.conexao.conectar()
        let consulta = await this.conexao.query(`Select * from cliente`) as Array<any>
        await this.conexao.desconectar() 
        return consulta
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