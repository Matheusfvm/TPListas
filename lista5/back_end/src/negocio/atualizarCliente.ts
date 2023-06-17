import BancoDados from "../modelo/bancoDados";
import Atualizador from "./atualizador";

export default class AtualizarCliente extends Atualizador {
    private conexao: BancoDados
    constructor(conexao: BancoDados){
        super()
        this.conexao = new BancoDados()
    };
    public atualizar(): void {
        
    }
    public async atualizarCliente (dados) {
        await this.conexao.conectar()
        let cliente = await this.conexao.query(`INSERT INTO clientes ()`)
    }
}