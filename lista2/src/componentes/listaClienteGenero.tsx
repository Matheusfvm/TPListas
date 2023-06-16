import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'


type props = {
    tema: string
    seletorView: Function
}

export default class ListaClienteGenero extends Component<props> {
    render() {
        let estilo = this.props.tema
        return (
            <div className="col s12">
                <div className="col s12 center">
                    <h5>Masculino</h5>
                </div>
                <div className="collection">
                    <a className="collection-item">Cliente id</a>
                    <a className="collection-item">Cliente id</a>
                    <a className="collection-item">Cliente id</a>
                    <a className="collection-item">Cliente id</a>
                </div>
                <div className="col s12 center">
                    <h5>Feminino</h5>
                </div>
                <div className="collection">
                    <a className="collection-item">Cliente id</a>
                    <a className="collection-item">Cliente id</a>
                    <a className="collection-item">Cliente id</a>
                    <a className="collection-item">Cliente id</a>
                </div>
                <div id="espacoNavBar" className="row col s3 center">
                    <a className="waves-effect waves-light blue darken-4 btn" onClick={(e) => this.props.seletorView('Listagens Específicas', e)}><i className="material-icons left">arrow_back</i>{'Voltar'}</a>
                </div>
            </div>                
        )
    }
}