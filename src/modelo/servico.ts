export default class Servico {
    private servico: string

    constructor(servico:string){
        this.servico = servico
    }

    public get getServico(): string {
        return this.servico
    }
}