/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'


type props = {
    tema: string
    seletorView: Function
}

export default class ListaCliente extends Component<props> {
    render() {
        let estilo = this.props.tema
        return (
            <div className="col s12">
                <div className="collection">
                    <a className="collection-item" onClick={(e) => this.props.seletorView('Dados Cliente', e)}>{'Cliente id'}</a>
                    <a className="collection-item" onClick={(e) => this.props.seletorView('Dados Cliente', e)}>{'Cliente id'}</a>
                    <a className="collection-item" onClick={(e) => this.props.seletorView('Dados Cliente', e)}>{'Cliente id'}</a>
                    <a className="collection-item" onClick={(e) => this.props.seletorView('Dados Cliente', e)}>{'Cliente id'}</a>
                </div>
            </div>                
        )
    }
}