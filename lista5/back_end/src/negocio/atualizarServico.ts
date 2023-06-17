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
};