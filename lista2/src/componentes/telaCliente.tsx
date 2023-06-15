import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css';

type props = {
    tema: string
    seletorView: Function
}

export default class TelaCliente extends Component<props> {
    render() {
        let estilo = ` ${this.props.tema}`
        return (
            <div id="espacoNavBar" className="row col s12">
                <div className="center">
                    <a className="waves-effect waves-light blue darken-4 btn" onClick={(e) => this.props.seletorView('Cadastrar Cliente', e)}><i className="material-icons left">add</i>{'Cadastrar Cliente'}</a>
                    <a className="waves-effect waves-light blue darken-4 btn" onClick={(e) => this.props.seletorView('Listar Clientes', e)}><i className="material-icons left">list</i>{'Listar Clientes'}</a>
                    <a className="waves-effect waves-light blue darken-4 btn" onClick={(e) => this.props.seletorView('Consumo Cliente', e)}><i className="material-icons left">shopping_cart</i>{'Consumo Cliente'}</a>
                    <a className="waves-effect waves-light blue darken-4 btn" onClick={(e) => this.props.seletorView('Listar Consumo', e)}><i className="material-icons left">list</i>{'Listar Consumo'}</a>
                </div>           
            </div>
        )
    }
}