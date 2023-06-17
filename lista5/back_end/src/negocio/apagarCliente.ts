import Apagador from "./apagador";
import BancoDados from "../modelo/bancoDados";

export default class ApagarCliente extends Apagador {
    private conexao: BancoDados
    constructor(){
        super()
        this.conexao = new BancoDados()
    };
    public apagar(): void {
    };
    public async apagarCliente(id: string) {
        await this.conexao.conectar()
        await this.conexao.query(
            `DELETE FROM cliente
            WHERE cliente_codigo = ?`, 
            [id]
        )
    };
};
