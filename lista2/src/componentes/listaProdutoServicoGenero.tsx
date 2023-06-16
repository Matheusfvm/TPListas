import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css';

type props = {
    tema: string
    seletorView: Function
}

export default class ListaProdutoServicoGenero extends Component<props> {
    render(){
        let estilo = ` ${this.props.tema}`
        return (
            <div className="col s12 center">                
                    <form className="row">
                        <div>
                            <h5>Masculino</h5>
                        </div>
                        <div className=" collection">
                            <div className="input-field col s6">
                                <input disabled value="" id="nome_produto" type="text" className="validate" />
                                <label htmlFor="nome_produto">Nome do produto</label>
                            </div>
                            <div className="input-field col s6">
                                <input disabled value="" id="preco_produto" type="number" className="validate" />
                                <label htmlFor="preco_produto">Preço</label>
                            </div>
                        </div>
                        <div className=" collection">
                            <div className="input-field col s6">
                                <input disabled value="" id="nome_produto" type="text" className="validate" />
                                <label htmlFor="nome_produto">Nome do serviço</label>
                            </div>
                            <div className="input-field col s6">
                                <input disabled value="" id="preco_servico" type="number" className="validate" />
                                <label htmlFor="preco_servico">Preço</label>
                            </div>
                        </div>
                        <div>
                            <h5>Feminino</h5>
                        </div>
                        <div className=" collection">
                            <div className="input-field col s6">
                                <input disabled value="" id="nome_produto" type="text" className="validate" />
                                <label htmlFor="nome_produto">Nome do produto</label>
                            </div>
                            <div className="input-field col s6">
                                <input disabled value="" id="preco_produto" type="number" className="validate" />
                                <label htmlFor="preco_produto">Preço</label>
                            </div>
                        </div>
                        <div className=" collection">
                            <div className="input-field col s6">
                                <input disabled value="" id="nome_produto" type="text" className="validate" />
                                <label htmlFor="nome_produto">Nome do serviço</label>
                            </div>
                            <div className="input-field col s6">
                                <input disabled value="" id="preco_servico" type="number" className="validate" />
                                <label htmlFor="preco_servico">Preço</label>
                            </div>
                        </div>
                    </form>
                    <div id="espacoNavBar" className="row col s3 center">
                        <a className="waves-effect waves-light blue darken-4 btn" onClick={(e) => this.props.seletorView('Listagens Específicas', e)}><i className="material-icons left">arrow_back</i>{'Voltar'}</a>
                    </div>
                </div>
        )
    }
}