import Servico from "../modelo/servico";
import Entrada from "../io/entrada";
import Apagador from "./apagador";

export default class ApagarServico extends Apagador {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor (servicos: Array<Servico>) {
        super()
        this.servicos = servicos
        this.entrada = new Entrada
    };
    public apagar (): void {
        console.log(`\nApagar servico`);
        let valorId = this.entrada.receberNumero(`Digite o ID do servico que será apagado: `);
        if (valorId > this.servicos.length || valorId === 0) {
            console.log(`Nenhum serviço com esse ID\n`);
        } else if (valorId <= this.servicos.length) {
            let indexDoServico = this.servicos.findIndex((servico) => {
                return servico.getId === valorId
            });
            if (indexDoServico !== -1){
                this.servicos.splice(indexDoServico, 1)
            };
            console.log(`\nServico apagado com sucesso\n`);
        };
    };
};