export default class Servico {
    private servico: string;
    private preco:number;
    private id:number;
    private quantidadeConsumo:number;

    constructor(id:number, servico:string, preco:number){
        this.servico = servico
        this.id = id
        this.preco = preco
        this.quantidadeConsumo = 0
    };

    public get getServico(): string {
        return this.servico
    };

    public get getPreco(): number {
        return this.preco
    };

    public get getId(): number {
        return this.id
    };

    public get getQuantidadeConsumo(): number{
        return this.quantidadeConsumo
    };

    public aumentaQuantidadeConsumo() {
        this.quantidadeConsumo += 1
    };

    public set setNomeServico (novoNome) {
        this.servico = novoNome
    };

    public set setPrecoServico (novoPreco) {
        this.preco = novoPreco
    };
};