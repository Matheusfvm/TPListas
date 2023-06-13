import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css';

type props = {
    tema: string
    seletorView: Function
}

export default class TelaServico extends Component<props> {
    render() {
        let estilo = ` ${this.props.tema}`
        return (
            <div id="espacoNavBar" className="row col s9">
                <div className="center">
                    <a className="waves-effect waves-light blue darken-4 btn" onClick={(e) => this.props.seletorView('Cadastrar Servico', e)}><i className="material-icons left">add</i>{'Cadastrar Serviço'}</a>
                    <a className="waves-effect waves-light blue darken-4 btn" onClick={(e) => this.props.seletorView('Listar Servicos', e)}><i className="material-icons left">list</i>{'Listar Serviços'}</a>
                </div>           
            </div>
        )
    }
}