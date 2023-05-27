import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Produto from "../modelo/produto";
import RG from "../modelo/rg";
import Servico from "../modelo/servico";
import Telefone from "../modelo/telefone";
import Cadastro from "./cadastro";

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private servicos: Array<Servico>
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>, produtos: Array<Produto>, servicos: Array<Servico>) {
        super()
        this.clientes = clientes
        this.produtos = produtos
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do cliente`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `);
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `);
        let genero = this.entrada.receberTexto('Insira o gênero (use M ou F): ')
        if (genero === 'f' || genero === 'F'){
            genero = 'feminino'
        }
        else if (genero === 'm' || genero === 'M'){
            genero = 'masculino'
        }
        else{
            genero = 'não informado'
        }
        //===================== CPF =====================

        let valor = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
        let data = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
        let partesData = data.split('/');
        let ano = new Number(partesData[2].valueOf()).valueOf();
        let mes = new Number(partesData[1].valueOf()).valueOf();
        let dia = new Number(partesData[0].valueOf()).valueOf();
        let dataEmissao = new Date(ano, mes, dia); 
        let cpf = new CPF(valor, dataEmissao);
    
        //===================== RG =====================

        let temRG = true
        let todosRG:Array<RG> =[]
        while (temRG){
            let valorRG = this.entrada.receberTexto(`Por favor informe o número do RG: `);
            let dataRG = this.entrada.receberTexto(`Por favor informe a data de emissão do RG, no padrão dd/mm/yyyy: `);
            let partesDataRG = dataRG.split('/');
            let anoRG = new Number(partesDataRG[2].valueOf()).valueOf();
            let mesRG = new Number(partesDataRG[1].valueOf()).valueOf();
            let diaRG = new Number(partesDataRG[0].valueOf()).valueOf();
            let dataEmissaoRG = new Date(anoRG, mesRG, diaRG); 
            let umRG = new RG(valorRG, dataEmissaoRG)
            todosRG.push(umRG)
            let continua = this.entrada.receberTexto('O cliente tem mais um RG? (responda com sim ou nao) ')

            if (continua === 'nao' || continua === 'n' || continua === 'não'){
                temRG = false
            }
        }


        //===================== Telefones =====================

        let temTelefone = true
        let todosTelefone:Array<Telefone> = []
        while (temTelefone){
            let ddd = this.entrada.receberTexto('Por favor insira o número do DDD: ')
            let numero = this.entrada.receberTexto('Por favor insira o número do telefone: ')
            let telefone = new Telefone(ddd, numero)
            todosTelefone.push(telefone)
            let continua = this.entrada.receberTexto('O cliente tem mais um Telefone? (responda com sim ou nao) ')

            if (continua === 'nao' || continua === 'n' || continua === 'não'){
                temTelefone = false
            }
        }

        //===================== Serviço =====================

        let servicosCliente:Array<Servico> = []

        this.servicos.forEach((servico)=>{
            let resposta = this.entrada.receberTexto(`O cliente usa o serviço ${servico.getServico} (responda com sim ou nao)`)
            if (resposta === 'sim' || resposta === 's'){
                servicosCliente.push(servico)
                servico.aumentaQuantidadeConsumo()
            }
        })

        //===================== Produto =====================

        let produtosCliente:Array<Produto> = []

        this.produtos.forEach((produto)=>{
            let resposta = this.entrada.receberTexto(`O cliente usa o produto ${produto.getProduto} (responda com sim ou nao)`)
            if (resposta === 'sim' || resposta === 's'){
                produtosCliente.push(produto)
                produto.aumentaQuantidadeConsumo()
            }
        })

        //===============================================
        let cliente:Cliente
        if(this.clientes.length === 0){
            cliente = new Cliente(1, genero, nome, nomeSocial, cpf, todosRG, todosTelefone, produtosCliente, servicosCliente);
        }
        else{
            let ultimoId = this.clientes[this.clientes.length -1].getId
            cliente = new Cliente(ultimoId+1, genero, nome, nomeSocial, cpf, todosRG, todosTelefone, produtosCliente, servicosCliente);
        }
        
        
        this.clientes.push(cliente)
        console.log(`\nCadastro concluído)\n`);
    }
}