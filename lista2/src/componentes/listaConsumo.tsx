import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'


type props = {
    tema: string
    seletorView: Function
}

export default class ListaConsumo extends Component<props> {
    render() {
        let estilo = this.props.tema
        return (
            <div className="col s6 center">
                <div className="colection">
                    <h5>Cliente id</h5>
                    <a className="waves-effect waves-light blue darken-4 btn" onClick={(e) => this.props.seletorView('Listar Consumo Produto', e)}>{'Listar Consumo  de Produto'}</a>
                    <a className="waves-effect waves-light blue darken-4 btn" onClick={(e) => this.props.seletorView('Listar Consumo Servico', e)}>{'Listar Consumo de Serviço'}</a>
                </div>
                <div id="espacoNavBar" className="row col s3 center">
                        <a className="waves-effect waves-light blue darken-4 btn" onClick={(e) => this.props.seletorView('Clientes', e)}><i className="material-icons left">arrow_back</i>{'Voltar'}</a>
                </div>
            </div>                
        )
    }
}