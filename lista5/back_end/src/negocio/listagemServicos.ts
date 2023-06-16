import Servico from "../modelo/servico"
import Listagem from "./listagem"


export default class ListagemServico extends Listagem {
    private servicos: Array<Servico>
    constructor(servicos: Array<Servico>){
        super()
        this.servicos = servicos
    }
    public listar(): void {
        console.log(`\nLista de todos os Serços:\n`)
        console.log(`--------------------------------------`)
        this.servicos.forEach(servico => {// "forEach" passa por todos os elementos de um Array
            console.log(`ID: ${servico.getId}`)
            console.log(`Nome: ${servico.getServico}`)
            console.log(`Preço: R$ ${servico.getPreco}`)
            console.log(`Consumido ${servico.getQuantidadeConsumo} vezes`)
            console.log(`--------------------------------------`)
        })
        console.log(`\nFim da lista\n`)
    }

    public listagem5ServicosMaisConsumidos(){
        let listagem = this.servicos
        listagem.sort((a, b) => {return b.getQuantidadeConsumo - a.getQuantidadeConsumo})
        let contagem = 1
        listagem.forEach((lista)=>{
            if(contagem <= 5){
                contagem += 1
                console.log(`ID: ${lista.getId} | ${lista.getServico} | R$ ${lista.getPreco} | Consumido ${lista.getQuantidadeConsumo} vezes`)
            }
        })
    }
}