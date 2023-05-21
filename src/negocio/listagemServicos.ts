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
            console.log(`--------------------------------------`)
        })
        console.log(`\nFim da lista\n`)
    }
}