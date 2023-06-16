import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css';

type props = {
    tema: string
    seletorView: Function
}

export default class TelaListagemEspecificas extends Component<props> {
    render() {
        let estilo = ` ${this.props.tema}`
        return (
            <div className="col s12">
                <div className="collection">
                    <a className="collection-item" onClick={(e) => this.props.seletorView('Lista Cliente Maior Quantidade', e)}>{'10 cliente que mais consumiram pordutos ou serviços em quantidade'}</a>
                    <a className="collection-item" onClick={(e) => this.props.seletorView('Lista Cliente Menor Quantidade', e)}>{'10 cliente que menos consumiram produtos ou serviços'}</a>
                    <a className="collection-item" onClick={(e) => this.props.seletorView('Lista Cliente Valor', e)}>{'5 cliente que mais consumiram produtos ou serviços em valor'}</a>
                    <a className="collection-item" onClick={(e) => this.props.seletorView('Lista Cliente Genero', e)}>{'Lista dos Clientes divididos pelo gênero'}</a>
                    <a className="collection-item" onClick={(e) => this.props.seletorView('Lista Produto Servico Genero', e)}>{'Lista dos produtos ou serviços mais consumidos por cada gênero'}</a>
                    <a className="collection-item" onClick={(e) => this.props.seletorView('Lista Maior Consumo Produto Servico', e)}>{'Lista dos produtos ou serviços mais consumidos'}</a>
                </div>
                <div id="espacoNavBar" className="row col s3 center">
                    <a className="waves-effect waves-light blue darken-4 btn" onClick={(e) => this.props.seletorView('Clientes', e)}><i className="material-icons left">arrow_back</i>{'Voltar'}</a>
                </div> 
            </div>
        )
    }
}