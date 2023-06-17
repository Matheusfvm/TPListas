import Atualizador from "./atualizador";
import BancoDados from "../modelo/bancoDados";

export default class AtualizarProduto extends Atualizador {
    private conexao: BancoDados   
    constructor () {
        super()
        this.conexao = new BancoDados()
    };
    public atualizar(): void {
        
    };
    public async consumirProduto(produto: any, id: string) {
        await this.conexao.conectar()
        let quantidadeInicial = await this.conexao.query(
            `SELECT count(produto_codigo) 
            FROM consumo_produto 
            WHERE con_prod_nome = ? 
            GROUP BY cliente_codigo;`,
            [produto.nome]
        )
        let variacaoConsumo = produto.consumo - quantidadeInicial[0]
        let pegaPrecoIdProduto = await this.conexao.query(
            `SELECT produto_codigo, produto_preco 
            FROM produto
            WHERE produto = ?;`,
            [produto.nome]
        )
        console.log(pegaPrecoIdProduto)
        for (let i = 0; i < variacaoConsumo; i++) {
            let insereProduto = await this.conexao.query(
                `INSERT INTO consumo_produto (con_prod_nome, con_prod_preco, cliente_codigo, produto_servico)
                VALUES (?, ?, ?, ?);`,
                [produto.nome, pegaPrecoIdProduto[0].produto_preco, id, pegaPrecoIdProduto[0].produto_codigo]
            )
        }
    };
};