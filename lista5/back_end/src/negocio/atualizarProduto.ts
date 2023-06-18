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
            `SELECT cliente.cliente_codigo, coalesce(count(produto_codigo), 0) as contagem
            FROM cliente
                LEFT JOIN consumo_produto ON consumo_produto.cliente_codigo = cliente.cliente_codigo and consumo_produto.con_prod_nome = ?
            WHERE cliente.cliente_codigo = ?
            GROUP BY cliente.cliente_codigo`,
            [produto.produtoNome, id]
        )
        await this.conexao.desconectar()
        await this.conexao.conectar()
        console.log("AAAAAAAAAAAAAA", produto.consumo)
        console.log("BBBBBBBBBBBB", quantidadeInicial[0])

        let variacaoConsumo = parseInt(produto.consumo) - quantidadeInicial[0][0].contagem
        let pegaPrecoIdProduto = await this.conexao.query(
            `SELECT produto_codigo, produto_preco 
            FROM produto
            WHERE produto_nome = ?;`,
            [produto.produtoNome]
        )
        this.conexao.desconectar()
        await this.conexao.conectar()
        console.log(pegaPrecoIdProduto[0][0])
        console.log(`INSERT INTO consumo_produto (con_prod_nome, con_prod_preco, cliente_codigo, produto_codigo)
        VALUES (${produto.produtoNome}, ${pegaPrecoIdProduto[0][0].produto_preco}, ${id}, ${pegaPrecoIdProduto[0][0].produto_codigo});`)
        for (let i = 0; i < variacaoConsumo; i++) {
            await this.conexao.query(
                `INSERT INTO consumo_produto (con_prod_nome, con_prod_preco, cliente_codigo, produto_codigo)
                VALUES (?, ?, ?, ?);`,
                [produto.produtoNome, pegaPrecoIdProduto[0][0].produto_preco, id, pegaPrecoIdProduto[0][0].produto_codigo]
            )
        }
        await this.conexao.desconectar()
    };
};