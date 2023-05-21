import Entrada from "../io/entrada";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";
import Cadastro from "./cadastro";


export default class insereServicoProduto extends Cadastro {
    private servico: Array<Servico>
    private produto: Array<Produto>
    private entrada: Entrada
    constructor(servico: Array<Servico>, produto: Array<Produto>) {
        super()
        this.servico = servico
        this.produto = produto
        this.entrada = new Entrada()
    }

    public cadastrar(): void {
        
        let temServico = true
        let temProduto = true
        while (temServico){
            let inputServico = this.entrada.receberTexto('Insera um serviço: ')
            let continua = this.entrada.receberTexto('Há mais algum serviço (responda com sim ou nao) ')
            let umServico = new Servico(inputServico)
            this.servico.push(umServico)
            if(continua === 'nao' || continua === 'não' || continua === 'n'){
                temServico = false
            }
        }
        while(temProduto){
            let inputProduto = this.entrada.receberTexto('Insira um produto: ')
            let continua = this.entrada.receberTexto('Há mais algum serviço (responda com sim ou nao) ')
            let umProduto = new Produto(inputProduto)
            this.produto.push(umProduto)
            if(continua === 'nao' || continua === 'não' || continua === 'n'){
                temProduto = false
            }
        }      
    }
}