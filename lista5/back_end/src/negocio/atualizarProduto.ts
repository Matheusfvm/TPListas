import Atualizador from "./atualizador";
import BancoDados from "../modelo/bancoDados";

export default class AtualizarProduto extends Atualizador {
    private conexao: BancoDados   
    constructor () {
        super()
        this.conexao = new BancoDados()
    };
    public async atualizar(descricaoProduto, precoProduto, id){
        await this.conexao.conectar()
        await this.conexao.query(`
            UPDATE produto
            SET produto_nome = ?,
                produto_preco = ?
            WHERE produto_codigo = ?;`, 
            [descricaoProduto, precoProduto, id])
        await this.conexao.desconectar()
    };
    public async regatar(id){
        await this.conexao.conectar()
        let dados = await this.conexao.query(`
            SELECT produto_nome as descricaoProduto, produto_preco as precoProduto
            FROM produto
            WHERE produto_codigo = ?
        `, [id]) as Array<any>
        await this.conexao.desconectar()
        return dados[0]
    };
    public async consumirProduto(produto: any, id: string) {
        await this.conexao.conectar()
        let quantidadeInicial = await this.conexao.query(
            `SELECT count(produto_codigo) 
            FROM consumo_produto 
            WHERE con_prod_nome = ? 
            GROUP BY cliente_codigo;`,
            [produto.produtoNome]
        )
        await this.conexao.desconectar()
        await this.conexao.conectar()
        let variacaoConsumo = produto.consumo - quantidadeInicial[0]
        let pegaPrecoIdProduto = await this.conexao.query(
            `SELECT produto_codigo, produto_preco 
            FROM produto
            WHERE produto_nome = ?;`,
            [produto.produtoNome]
        )
        this.conexao.desconectar()
        await this.conexao.conectar()
        console.log(pegaPrecoIdProduto[0][0])
        for (let i = 0; i < variacaoConsumo; i++) {
            await this.conexao.query(
                `INSERT INTO consumo_produto (con_prod_nome, con_prod_preco, cliente_codigo, produto_servico)
                VALUES (?, ?, ?, ?);`,
                [produto.produtoNome, pegaPrecoIdProduto[0][0].produto_preco, id, pegaPrecoIdProduto[0][0].produto_codigo]
            )
        }
        await this.conexao.desconectar()
    };
};