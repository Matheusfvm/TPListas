import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'


type props = {
    tema: string
    seletorView: Function
}

export default class ListaProduto extends Component<props> {
    render() {
        let estilo = this.props.tema
        return (
            <div className="col s10">
                <div className="collection">
                    <a className="collection-item" onClick={(e) => this.props.seletorView('Dados Produto', e)}>{'Produto id'}</a>
                    <a className="collection-item" onClick={(e) => this.props.seletorView('Dados Produto', e)}>{'Produto id'}</a>
                    <a className="collection-item" onClick={(e) => this.props.seletorView('Dados Produto', e)}>{'Produto id'}</a>
                    <a className="collection-item" onClick={(e) => this.props.seletorView('Dados Produto', e)}>{'Produto id'}</a>
                </div>
            </div>                
        )
    }
}