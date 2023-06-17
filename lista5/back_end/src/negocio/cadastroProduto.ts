import Entrada from "../io/entrada";// Importando o método de entrada (input) "prompt-sync"
import Produto from "../modelo/produto";//Importando a clase produto
import Cadastro from "./cadastro";//Importando a função do cadastro
import BancoDados from "../modelo/bancoDados"

export default class CadastroProduto extends Cadastro {
    private conexao: BancoDados
    constructor(){
        super()
        this.conexao = new BancoDados
        
    }
    public async cadastrar(dados: any){
        await this.conexao.conectar()
        await this.conexao.query(`
            INSERT INTO produto(produto_nome, produto_preco)
            VALUES(?, ?)
        `, [dados.descricaoProduto, dados.precoProduto])
        await this.conexao.desconectar()
    }
}