import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'


type props = {
    tema: string
    seletorView: Function
}

export default class ListaMaiorConsumoProdutoServico extends Component<props> {
    render() {
        let estilo = this.props.tema
        return (
            <div id="espacoNavBar" className="col s12 center">
                <div className="collection">
                <form className="row">
                    <div>
                        <div className="input-field col s6">
                            <input disabled value="" id="nome_produto_servico" type="text" className="validate" />
                            <label htmlFor="nome_produto_servico">Nome do produto ou serviço</label>
                        </div>
                        <div className="input-field col s6">
                            <input disabled value="" id="produto_servico_preco" type="number" className="validate" />
                            <label htmlFor="produto_servico_preco">Quantidade</label>
                        </div>
                        <div className="input-field col s6">
                            <input disabled value="" id="nome_produto_servico" type="text" className="validate" />
                            <label htmlFor="nome_produto_servico">Nome do produto ou serviço</label>
                        </div>
                        <div className="input-field col s6">
                            <input disabled value="" id="produto_servico_preco" type="number" className="validate" />
                            <label htmlFor="produto_servico_preco">Quantidade</label>
                        </div>
                    </div>
                </form>
                </div>
                <div id="espacoNavBar" className="row col s3">
                    <a className="waves-effect waves-light blue darken-4 btn" onClick={(e) => this.props.seletorView('Listasgens Especificas', e)}><i className="material-icons left">arrow_back</i>{'Voltar'}</a>
                </div>             
            </div>               
        )
    }
}