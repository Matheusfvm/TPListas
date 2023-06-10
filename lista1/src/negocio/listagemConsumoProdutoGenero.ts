import Cliente from "../modelo/cliente";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";
import Listagem from "./listagem";


export default class ListagemConsumoProdutoGenero extends Listagem {
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    constructor(clientes:Array<Cliente>, produtos:Array<Produto>){
        super();
        this.clientes = clientes
        this.produtos = produtos
    }

    public listar(){
        let listaProduto:any = []
        this.produtos.forEach((produto)=>{
            let linha = {
                id:produto.getId,
                produto:produto.getProduto,
                consumoMasculino:0,
                consumoFeminino:0
            }
            this.clientes.forEach((cliente)=>{
                if(cliente.getGenero === 'feminino'){
                    cliente.getProdutosConsumidos.forEach((consumido)=>{
                        if(consumido.getId === produto.getId){
                            linha.consumoFeminino += 1
                        }
                    })
                }
                else if (cliente.getGenero === 'masculino'){
                    cliente.getProdutosConsumidos.forEach((consumido)=>{
                        if(consumido.getId === produto.getId){
                            linha.consumoMasculino += 1
                        }
                    })
                }
            })
            listaProduto.push(linha)
        })
        let listaFeminina = listaProduto.sort((a, b)=>{return b.consumoFeminino - a.consumoFeminino}) 
        let listaMasculino = listaProduto.sort((a, b)=>{return b.consumoMasculino - a.consumoMasculino})

        console.log('Produto mais consumido por Mulheres:')
        let contagem = 1
        listaFeminina.forEach((lista)=>{
            if(contagem <= 5){
                console.log(`ID: ${lista.id} | ${lista.produto} | Consumido ${lista.consumoFeminino} vezes`)
                contagem += 1
            }
        })
        contagem = 1
        console.log('\nProduto mais consumido por Homens:')
        listaMasculino.forEach((lista)=>{
            if(contagem <= 5){
                console.log(`ID: ${lista.id} | ${lista.produto} | Consumido ${lista.consumoMasculino} vezes`)
                contagem += 1
            }
        })
    }
}