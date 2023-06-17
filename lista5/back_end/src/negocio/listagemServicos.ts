import BancoDados from "../modelo/bancoDados"
import Servico from "../modelo/servico"
import Listagem from "./listagem"


export default class ListagemServico extends Listagem {
    private conexao:BancoDados
    constructor(){
        super()
        this.conexao =  new BancoDados
        }
    public async listar(){
        await this.conexao.conectar()
        let resultado = await this.conexao.query(`
        SELECT s.servico_codigo as id, s.servico_nome as nomeServico, COALESCE(cH.consumoHomem, 0) as consumoHomem, COALESCE(cM.consumoMulher, 0) as consumoMulher, COALESCE(cH.consumoHomem, 0) + COALESCE(cM.consumoMulher, 0) as consumoTotal
        FROM servico s
        	LEFT JOIN (SELECT count(consumo_servico.con_serv_preco) as consumoHomem, consumo_servico.servico_codigo 
        		FROM consumo_servico, cliente 
        		WHERE consumo_servico.cliente_codigo = cliente.cliente_codigo 
                and cliente.cliente_genero = 'Masculino'
                GROUP BY consumo_servico.servico_codigo) cH 
        		ON cH.servico_codigo = s.servico_codigo
            LEFT JOIN (SELECT count(consumo_servico.con_serv_preco) as consumoMulher, consumo_servico.servico_codigo
        		FROM consumo_servico, cliente 
        		WHERE consumo_servico.cliente_codigo = cliente.cliente_codigo 
                and cliente.cliente_genero = 'Feminino'
                GROUP BY consumo_servico.servico_codigo) cM 
                ON cM.servico_codigo = s.servico_codigo
        GROUP BY s.servico_codigo;
        `) as Array<any>
        await this.conexao.desconectar()
        console.log(resultado)
        return resultado[0]
    }
}