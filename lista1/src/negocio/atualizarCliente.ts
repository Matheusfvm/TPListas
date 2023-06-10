import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import Atualizador from "./atualizador";
import RG from "../modelo/rg";
import Telefone from "../modelo/telefone";

export default class AtualizarCliente extends Atualizador {
    private clientes: Array<Cliente>;
    private entrada: Entrada;
    constructor(clientes: Array<Cliente>){
        super()
        this.clientes = clientes;
        this.entrada = new Entrada;
    };
    public atualizar(): void {
        console.log(`\nAtualizar o cadastro do cliente`);
        let valorId = this.entrada.receberNumero(`Digite o ID do cliente que será atualizado: `);
        if (valorId > this.clientes.length || valorId === 0) {
            console.log(`Nenhum cliente com esse ID\n`);
        } else if (valorId <= this.clientes.length) {
            let indexDoCliente = this.clientes.findIndex((cliente) => {
                return cliente.getId === valorId
            });
            this.clientes[indexDoCliente].nome = this.entrada.receberTexto(`Novo nome: `);
            this.clientes[indexDoCliente].nomeSocial = this.entrada.receberTexto(`Novo nome social: `);
           
            // ------------------ Gênero -------------------
            let genero = this.entrada.receberTexto(`Insira o novo gênero (use M ou F): `);
            if (genero === 'f' || genero === 'F'){
                genero = 'feminino'
            }
            else if (genero === 'm' || genero === 'M'){
                genero = 'masculino'
            }
            else{
                genero = 'não informado'
            };
            this.clientes[indexDoCliente].setGenero = genero;
            
            // -------------------- RG ----------------------
            let temRG = true;
            let cadastraNovoRG = this.entrada.receberTexto(`Deseja cadastrar um novo RG (sim ou nao)? `);
            if (cadastraNovoRG === 'n' || cadastraNovoRG === 'nao' || cadastraNovoRG === 'não'){
                temRG = false
            };
            let todosRG:Array<RG> = this.clientes[indexDoCliente].getRgs;
            while (temRG){
                let valorRG = this.entrada.receberTexto(`Por favor informe o número do RG: `);
                let dataRG = this.entrada.receberTexto(`Por favor informe a data de emissão do RG, no padrão dd/mm/yyyy: `);
                let partesDataRG = dataRG.split('/');
                let anoRG = new Number(partesDataRG[2].valueOf()).valueOf();
                let mesRG = new Number(partesDataRG[1].valueOf()).valueOf();
                let diaRG = new Number(partesDataRG[0].valueOf()).valueOf();
                let dataEmissaoRG = new Date(anoRG, mesRG, diaRG); 
                let umRG = new RG(valorRG, dataEmissaoRG);
                todosRG.push(umRG);
                let continua = this.entrada.receberTexto('Deseja cadastrar outro RG(sim ou nao)? ');
                if (continua === 'nao' || continua === 'n' || continua === 'não'){
                    temRG = false
                };
            };
            
            // ------------------ Telefone ------------------
            let temTelefone = true;
            let todosTelefone = this.clientes[indexDoCliente].getTelefones;
            let cadastraNovoTelefone = this.entrada.receberTexto(`Deseja cadastrar um novo telefone(sim ou nao)? `);
            if (cadastraNovoTelefone === 'n' || cadastraNovoTelefone === 'nao' || cadastraNovoTelefone === 'não') {
                temTelefone = false
            };
            while (temTelefone){
                let ddd = this.entrada.receberTexto('Por favor insira o número do DDD: ')
                let numero = this.entrada.receberTexto('Por favor insira o número do telefone: ')
                let telefone = new Telefone(ddd, numero);
                todosTelefone.push(telefone)
                let continua = this.entrada.receberTexto('Gostaria de cadastrar outro telefone (sim ou nao)? ');
                if (continua === 'nao' || continua === 'n' || continua === 'não'){
                    temTelefone = false
                };
            };
            console.log(`\nAtualização feita com sucesso\n`);
        };        
    };
}