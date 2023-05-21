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

}