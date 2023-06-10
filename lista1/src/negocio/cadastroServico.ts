import Entrada from "../io/entrada"
import Servico from "../modelo/servico"
import Cadastro from "./cadastro"



export default class CadastroServico extends Cadastro {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>){
        super()
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    public cadastrar(): void{ // Essa função não tem retorno, é usada para cadastrar um produto e guardar esse produto nos Array produtos
        console.log(`\nInício do cadastro de serviço`)
        let nomeServico = this.entrada.receberTexto(`Por favor informe o nome do serviço: `)// Uso o método da classe entrada para pegar o valor do nome no console
        let inputPreco = this.entrada.receberNumero('Insira o preço do serviço (use apenas números e "." para separar reais de centavos): ')
        let servico: Servico;
        if (this.servicos.length === 0) {
            servico = new Servico(1, nomeServico, inputPreco)
        } else {
            let ultimoId = this.servicos[this.servicos.length -1].getId
            servico = new Servico(ultimoId + 1, nomeServico, inputPreco)
        }
        this.servicos.push(servico)// Guardo o produto criado no Array de produtos
        console.log(`\nCadastro concluído\n`)
    }
}