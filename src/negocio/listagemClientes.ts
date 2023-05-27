import Cliente from "../modelo/cliente";
import Listagem from "./listagem";

export default class ListagemClientes extends Listagem {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\nLista de todos os clientes:\n`);
        this.clientes.forEach(cliente => {
            console.log(`Nome: ` + cliente.nome);
            console.log(`Nome social: ` + cliente.nomeSocial);
            console.log(`CPF: ` + cliente.getCpf.getValor);
            console.log('----- RGs -----')
            cliente.getRgs.forEach((rgs)=>{
                console.log(`Número RG: ${rgs.getValor}\nData de emissão: ${rgs.getDataEmissao}`)
                console.log('---------------')
            })
            console.log(`Data do cadastro: ${cliente.getServicosConsumidos}`)
            console.log('----- Telefones -----')
            cliente.getTelefones.forEach((telefone)=>{
                console.log(`(${telefone.getDdd}) ${telefone.getNumero}`)
            })
            console.log('---------------------')
            console.log("PRODUTOS CONSUMIDOS")
            console.log('       --------------------------------')
            cliente.getProdutosConsumidos.forEach((produto)=>{
                
                
                console.log(`       ID: ${produto.getId}\n       Produto: ${produto.getProduto}\n       Preço: ${produto.getPreco}`)
                console.log('       --------------------------------')
            })
            console.log("SERVIÇOS CONSUMIDOS")
            console.log('       --------------------------------')
            cliente.getServicosConsumidos.forEach((servico)=>{
                
                
                console.log(`       ID: ${servico.getId}\n       Serviço: ${servico.getServico}\n       Preços: ${servico.getPreco}`)
                console.log('       --------------------------------')
            })
            console.log(`\n=========================================\n`);
        });
        console.log(`\n`);
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