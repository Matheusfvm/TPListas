import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import TelaCliente from "./telaCliente";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import FormularioCadastroProduto from "./formularioCadastroProduto";
import ListaProduto from "./listaProduto";
import ListaCliente from "./listaCliente";
import DadoCliente from "./dadoCliente";

type state = {
    tela: string

}

export default class Roteador extends Component<{}, state> {
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Clientes'
        }
        this.selecionarView = this.selecionarView.bind(this)
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log(novaTela);
        this.setState({
            tela: novaTela
        })
    }

    render() {
        let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema="blue lighten-1" botoes={['Clientes', 'Produtos', 'Servico', 'Listagens Específicas']} />
        if (this.state.tela === 'Clientes') {
            return (
                <>
                    {barraNavegacao}
                    <TelaCliente tema="blue lighten-1" seletorView={this.selecionarView}/>
                </>
            )
        } else if (this.state.tela === 'Listar Clientes') {
            return (
                <>
                    {barraNavegacao}
                    <ListaCliente tema="blue lighten-1" seletorView={this.selecionarView}/>
                </>
            )
        } else if (this.state.tela === 'Dados Cliente') {
            return (
                <>
                    {barraNavegacao}
                    <DadoCliente tema="blue lighten-1" seletorView={this.selecionarView}/>
                </>
            )
        }
    }
}