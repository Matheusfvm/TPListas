import Cliente from "../modelo/cliente";
import Produto from "../modelo/produto";
import Servico from "../modelo/servico";
import Listagem from "./listagem";
import BancoDados from "../modelo/bancoDados";


export default class ListagemConsumoProdutoGenero extends Listagem {
    /* private clientes: Cliente
    private produtos: Produto */
    private conexao: BancoDados
    constructor(){
        super();
        this.conexao = new BancoDados()
        /* this.clientes = clientes
        this.produtos = produtos */
    }

    public listar(){
    }
}
