export default class Produto {
    private produto: string 
    constructor (nome: string){
        this.produto = nome
    }

    public get getProduto(): string {
        return this.produto
    }
}