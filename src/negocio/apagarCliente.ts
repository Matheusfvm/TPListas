import Apagador from "./apagador";
import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";

export default class ApagarCliente extends Apagador {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>){
        super()
        this.entrada = new Entrada
        this.clientes = clientes
    };
    public apagar(): void {
        console.log(`\nApagar cliente`);
        let valorId = this.entrada.receberNumero(`Digite o ID do cliente que será apagado: `);
        if (valorId > this.clientes.length || valorId === 0) {
            console.log(`Nenhum cliente com esse ID\n`);
        } else if (valorId <= this.clientes.length) {            
            let indexDoCliente = this.clientes.findIndex((cliente) => {
                return cliente.getId === valorId
            });
            if (indexDoCliente !== -1){
                this.clientes.splice(indexDoCliente, 1)
            };
            console.log(`\nCliente apagado com sucesso\n`);
        };        
    };

};
