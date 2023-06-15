import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'


type props = {
    tema: string
    seletorView: Function
}

export default class ListaConsumoServico extends Component<props> {
    render() {
        let estilo = this.props.tema
        return (
            <div id="espacoNavBar" className="col s12 center">
                <div className="collection">
                <form className="row">
                    <div className="col s12">
                        <h5>Serviço ID</h5>
                    </div>
                    <div>
                        <div className="input-field col s6">
                            <input disabled value="" id="nome_produto" type="text" className="validate" />
                            <label htmlFor="nome_produto">Nome do Serviço</label>
                        </div>
                        <div className="input-field col s6">
                            <input disabled value="" id="produto_preco" type="number" className="validate" />
                            <label htmlFor="produto_preco">Preço</label>
                        </div>
                    </div>
                </form>
                </div>
                <div id="espacoNavBar" className="row col s3">
                    <a className="waves-effect waves-light blue darken-4 btn" onClick={(e) => this.props.seletorView('Listar Consumo', e)}><i className="material-icons left">arrow_back</i>{'Voltar'}</a>
                </div>             
            </div>               
        )
    }
}