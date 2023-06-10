import Servico from "../modelo/servico";
import Entrada from "../io/entrada";
import Atualizador from "./atualizador";

export default class AtualizarServico extends Atualizador {
    private servicos: Array<Servico>;
    private entrada: Entrada;
    constructor (servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada
    };
    public atualizar(): void {
        console.log(`\nAtualizar o cadastro do Serviço`);
        let valorId = this.entrada.receberNumero(`Digite o ID do serviço que será atualizado: `);
        if (valorId > this.servicos.length || valorId === 0) {
            console.log(`Nenhum serviço com esse ID\n`);
        } else if (valorId <= this.servicos.length) {            
            let indexDoServico = this.servicos.findIndex((servico) => {
                return servico.getId === valorId
            });
            this.servicos[indexDoServico].setNomeServico = this.entrada.receberTexto(`Por favor informe o nome do serviço: `);
            this.servicos[indexDoServico].setPrecoServico = this.entrada.receberNumero('Insira o preço do serviço (use apenas números e "." para separar reais de centavos): ');
            console.log(`\nProduto Atualizado\n`)
        };
        
    };
};