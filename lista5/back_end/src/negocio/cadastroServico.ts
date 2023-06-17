import BancoDados from "../modelo/bancoDados"
import Cadastro from "./cadastro"



export default class CadastroServico extends Cadastro {
    private conexao: BancoDados
    constructor(){
        super()
        this.conexao = new BancoDados
        
    }
    public async cadastrar(dados: any){
        await this.conexao.conectar()
        await this.conexao.query(`
            INSERT INTO servico(servico_nome, servico_preco)
            VALUES(?, ?)`, 
            [dados.descricaoServico, dados.precoServico])
        await this.conexao.desconectar()
    }
}