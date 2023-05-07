import Entrada from "../io/entrada";// Importando o método de entrada (input) "prompt-sync"
import Produto from "../modelo/produto";//Importando a clase produto
import Cadastro from "./cadastro";//Importando a função do cadastro

export default class CadastroProduto extends Cadastro {// Criando a classe "CadastrarProduto", importando a classe Cadastro
    private produtos: Array<Produto>// O atributo produtos é do tipo array(lista) e esse array segue o tipo das propriedades da classe Produto
    private entrada: Entrada//Esse atributo recebe o tipo da entrada
    constructor(produtos: Array<Produto>){
        super()// Está vazio pois nenhum atributo da classe superior está sendo usada nessa classe
        this.produtos = produtos
        this.entrada = new Entrada()// Esse atríbuto não é usado no construtor, logo objetos criados a pratir dessa classe não possuem ele.
                                    // Só que ele é usado na classe em si, para guardar todos os métodos da classe Entrada       
    }
    public cadastrar(): void{ // Essa função não tem retorno, é usada para cadastrar um produto e guardar esse produto nos Array produtos
        console.log(`\nInício do cadastro de produtos`)
        let nome = this.entrada.receberTexto(`Por favor informe o nome do produto: `)// Uso o método da classe entrada para pegar o valor do nome no console
        let produto = new Produto(nome)// Cria o objeto produto usando a classe Produto
        this.produtos.push(produto)// Guardo o produto criado no Array de produtos
        console.log(`\nCadastro concluído\n`)
    }
}