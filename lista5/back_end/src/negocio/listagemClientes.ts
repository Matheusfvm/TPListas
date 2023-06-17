import Cliente from "../modelo/cliente";
import Listagem from "./listagem";
import BancoDados from "../modelo/bancoDados";


export default class ListagemClientes extends Listagem {
    private clientes: Cliente
    private conexao: BancoDados
    constructor(clientes: Cliente) {
        super()
        this.conexao = new BancoDados
        this.clientes = clientes
    }
    public listar(): void {

    }

    public async listagemConsumoProduto(id: string){
        await this.conexao.conectar()
        let [consulta, meta]: any = this.conexao.query(`SELECT cp.cliente_codigo AS id, c.cliente_nome AS nome,`
        + `SUM(cp.produto_codigo) AS quantidade, SUM(cp.con_prod_preco) AS valor, c.cliente_genero`
        + `FROM consumo_produto cp INNER JOIN cliente c`
        + `ON cp.cliente_codigo = c.cliente_codigo`
        + `where cp.cliente_codigo = ${id}`
        + `group by cp.cliente_codigo;`)
        await this.conexao.desconectar() 
        return consulta
    }

    public listaClienteNomeId(){
        this.clientes.forEach((cliente) => {
            if(cliente.nomeSocial !== ''){
                console.log(`${cliente.getId} ${cliente.nomeSocial}`)
            }
            else{
                console.log(`${cliente.getId} ${cliente.nome}`)
            }
        })
    }

    public listaGenero(){
        console.log("MASCULINO")
        this.clientes.forEach((cliente)=>{
            if(cliente.getGenero === 'masculino'){
                if(cliente.nomeSocial !== ''){
                    console.log(`${cliente.getId} ${cliente.nomeSocial}`)
                }
                else{
                    console.log(`${cliente.getId} ${cliente.nome}`)
                }
            }
        })
        console.log("\nFEMININO")
        this.clientes.forEach((cliente)=>{
            if(cliente.getGenero === 'feminino'){
                if(cliente.nomeSocial !== ''){
                    console.log(`${cliente.getId} ${cliente.nomeSocial}`)
                }
                else{
                    console.log(`${cliente.getId} ${cliente.nome}`)
                }
            }
        })
        console.log("\nNÃO INFORMADO")
        this.clientes.forEach((cliente)=>{
            if(cliente.getGenero === 'não informado'){
                if(cliente.nomeSocial !== ''){
                    console.log(`${cliente.getId} ${cliente.nomeSocial}`)
                }
                else{
                    console.log(`${cliente.getId} ${cliente.nome}`)
                }
            }
        })
        console.log(`\n`);
    }

    public listagem10MaioresConsumidores() {
        let linhaClientes:any = []
        this.clientes.forEach((cliente) =>{
            let id = cliente.getId
            let nome:string
            if (cliente.nomeSocial !== ''){
                nome = cliente.nomeSocial
            }
            else{
                nome = cliente.nome
            }
            let consumo = cliente.getProdutosConsumidos.length + cliente.getServicosConsumidos.length
            let linhaCliente = {
                id:id,
                nome:nome,
                consumo:consumo
            }
            linhaClientes.push(linhaCliente)
        })
        linhaClientes.sort(function(a, b){return b.consumo - a.consumo})
        let contador = 1
        linhaClientes.forEach((linha)=>{
            if(contador <= 10){
                contador += 1
                console.log(`${linha.id} | ${linha.nome} | Quantidade de itens consumidos: ${linha.consumo}`)
            }
        })
    }

    public listagem5MaioresConsumidoresValor() {
        let linhaClientes:any = []
        this.clientes.forEach((cliente) =>{
            let id = cliente.getId
            let nome:string
            if (cliente.nomeSocial !== ''){
                nome = cliente.nomeSocial
            }
            else{
                nome = cliente.nome
            }
            let valor = 0
            cliente.getProdutosConsumidos.forEach((produto)=>{
                valor += produto.getPreco
            })
            cliente.getServicosConsumidos.forEach((servico)=>{
                valor += servico.getPreco
            })
            let linhaCliente = {
                id:id,
                nome:nome,
                consumo:valor
            }
            linhaClientes.push(linhaCliente)
        })
        linhaClientes.sort(function(a, b){return b.consumo - a.consumo})
        let contador = 1
        linhaClientes.forEach((linha)=>{
            if(contador <= 5){
                contador += 1
                console.log(`${linha.id} | ${linha.nome} | Valor consumidos: ${linha.consumo}`)
            }
        })
    }

    public listagem10MenoresConsumidores() {
        let linhaClientes:any = []
        this.clientes.forEach((cliente) =>{
            let id = cliente.getId
            let nome:string
            if (cliente.nomeSocial !== ''){
                nome = cliente.nomeSocial
            }
            else{
                nome = cliente.nome
            }
            let consumo = cliente.getProdutosConsumidos.length + cliente.getServicosConsumidos.length
            let linhaCliente = {
                id:id,
                nome:nome,
                consumo:consumo
            }
            linhaClientes.push(linhaCliente)
        })
        linhaClientes.sort(function(a, b){return a.consumo - b.consumo})
        let contador = 1
        linhaClientes.forEach((linha)=>{
            if(contador <= 10){
                contador += 1
                console.log(`${linha.id} | ${linha.nome} | Quantidade de itens consumidos: ${linha.consumo}`)
            }
        })
    }

}