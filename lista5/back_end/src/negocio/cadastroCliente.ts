import Entrada from "../io/entrada";
import BancoDados from "../modelo/bancoDados";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import RG from "../modelo/rg";
import Telefone from "../modelo/telefone";
import Cadastro from "./cadastro";

export default class CadastroCliente extends Cadastro {
    // private clientes: Array<Cliente>;
    private conexao: BancoDados
    constructor() {
        super()
        // this.clientes = clientes
        this.conexao = new BancoDados()
    };

    public async cadastrar(dados) {
        await this.conexao.conectar()
        // {nome, sobrenome, cpf{numeroCpf, dataEmissao}, genero, rgs[{numeroRG, dataEmissao}],
        //  telefone[{ddd, numeroTelefone}]
        let dataAtual = new Date
        const ano = dataAtual.getFullYear();
        const mes = dataAtual.getMonth() + 1; // Adicionamos 1 porque os meses são indexados a partir de 0
        const dia = dataAtual.getDate();
        const dataFormatada = `${ano}-${mes.toString().padStart(2, '0')}-${dia.toString().padStart(2, '0')}`;
        console.log(dataFormatada);

        let [resultado] = await this.conexao.query(`
        INSERT INTO cliente(cliente_nome, cliente_sobrenome, cliente_genero, cliente_cpf, cliente_cpf_emissao, cliente_data_cadastro)
        VALUES (?, ?, ?, ?, ?, ?)
        `, [dados.nome, dados.sobrenome, dados.genero,  dados.cpf.numeroCpf, dados.cpf.dataEmissao, dataFormatada])
        
        let id = resultado.insertId
        console.log(resultado.insertId)


        await this.conexao.desconectar()

        await this.cadastraRgs(dados.rgs, id)
        await this.cadastroTelefone(dados.telefone, id)
    }

    public async cadastraRgs(rgs:any, id:string){
        await this.conexao.conectar()
        rgs.forEach(async (rg)=>{
            await this.conexao.query(`
                INSERT INTO rg(rg_numero, rg_data_emissão, cliente_codigo)
                VALUES(?, ?, ?)
            `, [rg.numeroRG, rg.dataEmissao, id])
        })
        await this.conexao.desconectar()
    }

    public async cadastroTelefone(telefones:any, id:string){
        await this.conexao.conectar()
        telefones.forEach(async (telefone)=>{
            await this.conexao.query(`
                INSERT INTO telefone(telefone_ddd, telefone_numero, cliente_codigo)
                VALUES(?, ?, ?)
            `, [telefone.ddd, telefone.numeroTelefone, id])
        })
        await this.conexao.desconectar()
    }
}