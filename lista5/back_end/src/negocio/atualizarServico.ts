import Servico from "../modelo/servico";
import Entrada from "../io/entrada";
import Atualizador from "./atualizador";
import BancoDados from "../modelo/bancoDados";

export default class AtualizarServico extends Atualizador {
    private conexao:BancoDados
    constructor () {
        super()
        this.conexao = new BancoDados
    };
    public async atualizar(dados){
        await this.conexao.conectar()
        await this.conexao.query(`
            UPDATE servico
            SET servico_nome = ?,
                servico_preco = ?
            WHERE servico_codigo = ? 
        `, [dados.descricaoServico, dados.precoServico, dados.id])
        await this.conexao.desconectar()
    };

    public async regatar(id){
        await this.conexao.conectar()
        let dados = await this.conexao.query(`
            SELECT servico_nome as descricaoServico, servico_preco as precoServico
            FROM servico
            WHERE servico_codigo = ?
        `, [id]) as Array<any>
        await this.conexao.desconectar()
        return dados[0]
    }
    public async consumirServico(servico: any, id: string) {
        console.log(servico)
        await this.conexao.conectar()
        let quantidadeInicial = await this.conexao.query(
            `SELECT count(servico_codigo) 
            FROM consumo_servico 
            WHERE con_serv_nome = ? 
            GROUP BY cliente_codigo;`,
            [servico.servicoNome]
        )
        await this.conexao.desconectar()
        await this.conexao.conectar()
        let variacaoConsumo = servico.consumo - quantidadeInicial[0]
        let pegaPrecoIdServico = await this.conexao.query(
            `SELECT servico_codigo, servico_preco 
            FROM servico
            WHERE servico_nome = ?;`,
            [servico.servicoNome]
        )
        await this.conexao.desconectar()

        console.log(pegaPrecoIdServico[0][0])
        await this.conexao.conectar()
        for (let i = 0; i < variacaoConsumo; i++) {
            let insereServico = await this.conexao.query(
                `INSERT INTO consumo_servico (con_serv_nome, con_serv_preco, cliente_codigo, servico_codigo)
                VALUES (?, ?, ?, ?);`,
                [servico.servicoNome, pegaPrecoIdServico[0][0].servico_preco, id, pegaPrecoIdServico[0][0].servico_codigo]
            )
        }
        await this.conexao.desconectar()
    }
};