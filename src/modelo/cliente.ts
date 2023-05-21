import CPF from "./cpf"
import Produto from "./produto"
import RG from "./rg"
import Servico from "./servico"
import Telefone from "./telefone"

export default class Cliente {
    private id: number
    public nome: string
    public nomeSocial: string
    private genero: string
    private cpf: CPF
    private rgs: Array<RG>
    private dataCadastro: Date
    private telefones: Array<Telefone>
    private produtosConsumidos: Array<Produto>
    private servicosConsumidos: Array<Servico>
    constructor(id:number, genero:string, nome: string, nomeSocial: string, cpf: CPF, rgs: Array<RG>, telefone: Array<Telefone>, produtosConsumidos: Array<Produto>, servicosConsumidos: Array<Servico>) {
        this.id = id
        this.genero = genero
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.cpf = cpf
        this.rgs = rgs
        this.dataCadastro = new Date()
        this.telefones = telefone
        this.produtosConsumidos = produtosConsumidos
        this.servicosConsumidos = servicosConsumidos
    }
    public get getCpf(): CPF {
        return this.cpf
    }
    public get getRgs(): Array<RG> {
        return this.rgs
    }
    public get getDataCadastro(): Date {
        return this.dataCadastro
    }
    public get getTelefones(): Array<Telefone> {
        return this.telefones
    }
    public get getProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos
    }
    public get getServicosConsumidos(): Array<Servico> {
        return this.servicosConsumidos
    }
    public get getId():number{
        return this.id
    }
    public get getGenero():string{
        return this.genero
    }
}