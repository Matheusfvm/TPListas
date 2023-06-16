import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import TelaCliente from "./telaCliente";
import TelaProduto from "./telaProduto";
import TelaServico from "./telaServiço";
import TelaListagemEspecifica from "./telaListagemEspecifica";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import FormularioCadastroProduto from "./formularioCadastroProduto";
import FormularioCadastroServico from "./formularioCadastroServico";
import ListaProduto from "./listaProduto";
import ListaCliente from "./listaCliente";
import ListaClienteGenero from "./listaClienteGenero";
import ListaServico from "./listaServico";
import ListaConsumo from "./listaConsumo";
import ListaConsumoProduto from "./listaConsumoProduto";
import ListaConsumoServico from "./listaConsumoServico";
import ListaClienteMaiorQuantidade from "./listaClienteMaiorQuantidade";
import ListaClienteMenorQuantidade from "./listaClienteMenorQuantidade";
import ListaClienteValor from "./listaClienteValor";
import ListaProdutoServicoGenero from "./listaProdutoServicoGenero";
import ListaMaiorConsumoProdutoServico from "./listaMaiorConsumoProdutoServico";
import DadoCliente from "./dadoCliente";
import DadoProduto from "./dadoProduto";
import DadoServico from "./dadoServico";
import ConsumoCliente from "./consumoCliente";
import VinculaProdutoServico from "./vinculaProdutoServico";

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
        let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema="blue lighten-1" botoes={['Clientes', 'Produtos', 'Servicos', 'Listagens Especificas']} />
        if (this.state.tela === 'Clientes') {
            return (
                <>
                    {barraNavegacao}
                    <TelaCliente tema="blue lighten-1" seletorView={this.selecionarView}/>
                </>
            )
        } else if (this.state.tela === 'Cadastrar Cliente') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroCliente tema="blue darken-4" seletorView={this.selecionarView}/>
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
        } else if (this.state.tela === 'Produtos') {
            return (
                <>
                    {barraNavegacao}
                    <TelaProduto tema="blue ligthen-1" seletorView={this.selecionarView}/>
                </>
            )
            
        } else if (this.state.tela === 'Cadastrar Produto') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroProduto tema="blue darken-4" seletorView={this.selecionarView}/>
                </>
            )
        } else if (this.state.tela === 'Listar Produtos') {
            return (
                <>
                    {barraNavegacao}
                    <ListaProduto tema="blue ligthen-1" seletorView={this.selecionarView}/>
                </>
            )
        } else if (this.state.tela === 'Dados Produto') {
            return (
                <>
                    {barraNavegacao}
                    <DadoProduto tema="blue ligthen-1" seletorView={this.selecionarView}/>
                </>
            )
        } else if (this.state.tela === 'Servicos') {
            return (
                <>
                    {barraNavegacao}
                    <TelaServico tema="blue ligthen-1" seletorView={this.selecionarView}/>
                </>
            )
        } else if (this.state.tela === 'Cadastrar Servico') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroServico tema="blue darken-4" seletorView={this.selecionarView}/>
                </>
            )
        } else if (this.state.tela === 'Listar Servicos') {
            return (
                <>
                    {barraNavegacao}
                    <ListaServico tema="blue ligthen-1" seletorView={this.selecionarView}/>
                </>
            )
        } else if (this.state.tela === 'Dados Servico') {
            return (
                <>
                    {barraNavegacao}
                    <DadoServico tema="blue ligthen-1" seletorView={this.selecionarView}/>
                </>
            )
        } else if (this.state.tela === 'Listar Consumo') {
            return (
                <>
                    {barraNavegacao}
                    <ListaConsumo tema="blue ligthen-1" seletorView={this.selecionarView}/>
                </>
            )
        } else if (this.state.tela === 'Listar Consumo Produto') {
            return (
                <>
                    {barraNavegacao}
                    <ListaConsumoProduto tema="blue ligthen-1" seletorView={this.selecionarView}/>
                </>
            )
        } else if (this.state.tela === 'Listar Consumo Servico') {
            return (
                <>
                    {barraNavegacao}
                    <ListaConsumoServico tema="blue ligthen-1" seletorView={this.selecionarView}/>
                </>
            )
        } else if (this.state.tela === 'Consumo Cliente') {
            return (
                <>
                    {barraNavegacao}
                    <ConsumoCliente tema="blue ligthen-1" seletorView={this.selecionarView}/>
                </>
            )
        } else if (this.state.tela === 'Vincula Produto Servico') {
            return (
                <>
                    {barraNavegacao}
                    <VinculaProdutoServico tema="blue darken-4" seletorView={this.selecionarView}/>
                </>
            )
        } else if (this.state.tela === 'Listagens Especificas') {
            return (
                <>
                    {barraNavegacao}
                    <TelaListagemEspecifica tema="blue darken-4" seletorView={this.selecionarView}/>
                </>
            )
        } else if (this.state.tela === 'Lista Cliente Maior Quantidade') {
            return (
                <>
                    {barraNavegacao}
                    <ListaClienteMaiorQuantidade tema="blue darken-4" seletorView={this.selecionarView}/>
                </>
            )
        } else if (this.state.tela === 'Lista Cliente Menor Quantidade') {
            return (
                <>
                    {barraNavegacao}
                    <ListaClienteMenorQuantidade tema="blue darken-4" seletorView={this.selecionarView}/>
                </>
            )
        } else if (this.state.tela === 'Lista Cliente Valor') {
            return (
                <>
                    {barraNavegacao}
                    <ListaClienteValor tema="blue darken-4" seletorView={this.selecionarView}/>
                </>
            )
        } else if (this.state.tela === 'Lista Cliente Genero') {
            return (
                <>
                    {barraNavegacao}
                    <ListaClienteGenero tema="blue darken-4" seletorView={this.selecionarView}/>
                </>
            )
        } else if (this.state.tela === 'Lista Produto Servico Genero') {
            return (
                <>
                    {barraNavegacao}
                    <ListaProdutoServicoGenero tema="blue darken-4" seletorView={this.selecionarView}/>
                </>
            )
        } else if (this.state.tela === 'Lista Produto Servico Genero') {
            return (
                <>
                    {barraNavegacao}
                    <ListaProdutoServicoGenero tema="blue darken-4" seletorView={this.selecionarView}/>
                </>
            )
        } else if (this.state.tela === 'Lista Maior Consumo Produto Servico') {
            return (
                <>
                    {barraNavegacao}
                    <ListaMaiorConsumoProdutoServico tema="blue darken-4" seletorView={this.selecionarView}/>
                </>
            )
        }
    }
}