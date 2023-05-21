export default class Servico {
    private servico: string
    private preco:number
    private id:number


    constructor(id:number, servico:string, preco:number){
        this.servico = servico
        this.id = id
        this.preco = preco
    }

    public get getServico(): string {
        return this.servico
    }

    public get getPreco(): number {
        return this.preco
    }

    public get getId(): number {
        return this.id
    }
}