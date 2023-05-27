export default class Produto {
    private produto: string 
    private preco:number
    private id:number
    private quantidadeConsumo:number = 0

    constructor (id:number, produto: string, preco:number){
        this.produto = produto
        this.preco = preco
        this.id = id
    }

    public get getProduto(): string {
        return this.produto
    }

    public get getPreco(): number {
        return this.preco
    }

    public get getId(): number {
        return this.id
    }

    public get getQuantidadeConsumo(): number{
        return this.quantidadeConsumo
    }

    public aumentaQuantidadeConsumo() {
        this.quantidadeConsumo +=1
    }
}