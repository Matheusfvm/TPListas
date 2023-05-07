export default class Produto {
    public nome: string // Mudei a a propriedade, pois agora eu estou iniciando ela na classe, por isso retirei o "!" e passei um tipo
    constructor (nome: string){
        this.nome = nome
    }// Fiz o constructor dessa classe
}