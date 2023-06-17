import BancoDados from "../modelo/bancoDados";
import Atualizador from "./atualizador";
import CadastroCliente from "./cadastroCliente";

export default class AtualizarCliente extends Atualizador {
    private conexao: BancoDados
    private cadastrar: CadastroCliente
    constructor(){
        super()
        this.conexao = new BancoDados()
        this.cadastrar = new CadastroCliente()
    };
    public atualizar(): void {
        
    }
    public async atualizarCliente(id, nome, sobrenome, cpf, dataEmissaoCpf, genero) {
        await this.conexao.conectar()
        await this.conexao.query(
            `INSERT INTO clientes (cliente_nome, cliente_sobrenome, cliente_cpf, cliente_cpf_emissao, cliente_genero) 
            VALUES (?, ?, ?, ?, ?) WHERE cliente_codigo = ?`,
            [nome, sobrenome, cpf, dataEmissaoCpf, genero, id]
        );
        await this.conexao.desconectar()

    }
}