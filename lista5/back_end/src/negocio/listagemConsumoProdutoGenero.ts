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

    public async listagemConsumoProduto(){
            await this.conexao.conectar()
            let consulta = await this.conexao.query(`
            SELECT c.cliente_codigo AS id, c.cliente_nome AS nome,
            count(cp.produto_codigo) + count(cs.servico_codigo) AS consumoQuantidade, COALESCE(SUM(cp.con_prod_preco), 0.00) + COALESCE(SUM(cs.con_serv_preco), 0.00) AS consumoValor, c.cliente_genero as genero
            FROM cliente c 
                left join consumo_produto cp on c.cliente_codigo = cp.cliente_codigo
                left join consumo_servico cs on c.cliente_codigo = cs.cliente_codigo
            group by c.cliente_codigo;`) as Array<any>
            await this.conexao.desconectar() 
            return consulta[0]
    }
}
