import BancoDados from "../modelo/bancoDados";
import Listagem from "./listagem";

export default class ListagemProdutos extends Listagem {
    private conexao:BancoDados
    constructor(){
        super()
        this.conexao =  new BancoDados
        }
    public async listar(){
        await this.conexao.conectar()
        let resultado = await this.conexao.query(`
        SELECT p.produto_codigo as id, p.produto_nome as nomeProduto, COALESCE(cH.consumoHomem, 0) as consumoHomem, COALESCE(cM.consumoMulher, 0) as consumoMulher, COALESCE(cH.consumoHomem, 0) + COALESCE(cM.consumoMulher, 0) as consumoTotal
        FROM produto p
	    LEFT JOIN (SELECT count(consumo_produto.con_prod_codigo) as consumoHomem, consumo_produto.produto_codigo 
	    	FROM consumo_produto, cliente 
	    	WHERE consumo_produto.cliente_codigo = cliente.cliente_codigo 
            and cliente.cliente_genero = 'Masculino'
            GROUP BY consumo_produto.produto_codigo) cH 
	    	ON cH.produto_codigo = p.produto_codigo
        LEFT JOIN (SELECT count(consumo_produto.con_prod_codigo) as consumoMulher, consumo_produto.produto_codigo
	    	FROM consumo_produto, cliente 
	    	WHERE consumo_produto.cliente_codigo = cliente.cliente_codigo 
            and cliente.cliente_genero = 'Feminino'
            GROUP BY consumo_produto.produto_codigo) cM 
            ON cM.produto_codigo = p.produto_codigo
        GROUP BY p.produto_codigo;
        `) as Array<any>
        await this.conexao.desconectar()
        console.log(resultado)
        return resultado[0]
    }
}