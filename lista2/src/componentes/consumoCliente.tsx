import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'


type props = {
    tema: string
    seletorView: Function
}

export default class ConsumoCliente extends Component<props> {
    render() {
        let estilo = this.props.tema
        return (
            <div className="col s10">
                <div className="collection">
                    <a className="collection-item" onClick={(e) => this.props.seletorView('Vincula Produto Servico', e)}>{'Cliente id'}</a>
                    <a className="collection-item" onClick={(e) => this.props.seletorView('Vincula Produto Servico', e)}>{'Cliente id'}</a>
                    <a className="collection-item" onClick={(e) => this.props.seletorView('Vincula Produto Servico', e)}>{'Cliente id'}</a>
                    <a className="collection-item" onClick={(e) => this.props.seletorView('Vincula Produto Servico', e)}>{'Cliente id'}</a>
                </div>
            </div>                
        )
    }
}