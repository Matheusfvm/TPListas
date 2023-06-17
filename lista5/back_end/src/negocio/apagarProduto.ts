import Produto from "../modelo/produto";
import Entrada from "../io/entrada";
import Apagador from "./apagador";

export default class ApagarProduto extends Apagador {
    private produtos: Array<Produto>
    private entrada: Entrada
    constructor (produtos: Array<Produto>) {
        super()
        this.produtos = produtos
        this.entrada = new Entrada
    };
    public apagar (): void {        
    };
};