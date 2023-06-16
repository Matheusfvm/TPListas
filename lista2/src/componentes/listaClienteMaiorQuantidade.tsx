import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css';

type props = {
    tema: string
    seletorView: Function
}

export default class ListaClienteMaiorQuantidade extends Component<props> {
    render(){
        let estilo = ` ${this.props.tema}`
        return (
            <div className="col s12 center">                
                    <form className="row">
                        <div className=" collection">
                            <div className="input-field col s6">
                                <input disabled value="" id="nome_cliente" type="text" className="validate" />
                                <label htmlFor="nome_cliente">Nome do cliente</label>
                            </div>
                            <div className="input-field col s6">
                                <input disabled value="" id="quantidade" type="number" className="validate" />
                                <label htmlFor="quantidade">Quantidade de Produto ou Serviço</label>
                            </div>
                        </div>
                        <div className=" collection">
                            <div className="input-field col s6">
                                <input disabled value="" id="nome_cliente" type="text" className="validate" />
                                <label htmlFor="nome_cliente">Nome do cliente</label>
                            </div>
                            <div className="input-field col s6">
                                <input disabled value="" id="quantidade" type="number" className="validate" />
                                <label htmlFor="quantidade">Quantidade de Produto ou Serviço</label>
                            </div>
                        </div>
                        <div className=" collection">
                            <div className="input-field col s6">
                                <input disabled value="" id="nome_cliente" type="text" className="validate" />
                                <label htmlFor="nome_cliente">Nome do cliente</label>
                            </div>
                            <div className="input-field col s6">
                                <input disabled value="" id="quantidade" type="number" className="validate" />
                                <label htmlFor="quantidade">Quantidade de Produto ou Serviço</label>
                            </div>
                        </div>
                        <div className=" collection">
                            <div className="input-field col s6">
                                <input disabled value="" id="nome_cliente" type="text" className="validate" />
                                <label htmlFor="nome_cliente">Nome do cliente</label>
                            </div>
                            <div className="input-field col s6">
                                <input disabled value="" id="quantidade" type="number" className="validate" />
                                <label htmlFor="quantidade">Quantidade de Produto ou Serviço</label>
                            </div>
                        </div>
                        <div className=" collection">
                            <div className="input-field col s6">
                                <input disabled value="" id="nome_cliente" type="text" className="validate" />
                                <label htmlFor="nome_cliente">Nome do cliente</label>
                            </div>
                            <div className="input-field col s6">
                                <input disabled value="" id="quantidade" type="number" className="validate" />
                                <label htmlFor="quantidade">Quantidade de Produto ou Serviço</label>
                            </div>
                        </div>
                        <div className=" collection">
                            <div className="input-field col s6">
                                <input disabled value="" id="nome_cliente" type="text" className="validate" />
                                <label htmlFor="nome_cliente">Nome do cliente</label>
                            </div>
                            <div className="input-field col s6">
                                <input disabled value="" id="quantidade" type="number" className="validate" />
                                <label htmlFor="quantidade">Quantidade de Produto ou Serviço</label>
                            </div>
                        </div>
                        <div className=" collection">
                            <div className="input-field col s6">
                                <input disabled value="" id="nome_cliente" type="text" className="validate" />
                                <label htmlFor="nome_cliente">Nome do cliente</label>
                            </div>
                            <div className="input-field col s6">
                                <input disabled value="" id="quantidade" type="number" className="validate" />
                                <label htmlFor="quantidade">Quantidade de Produto ou Serviço</label>
                            </div>
                        </div>
                        <div className=" collection">
                            <div className="input-field col s6">
                                <input disabled value="" id="nome_cliente" type="text" className="validate" />
                                <label htmlFor="nome_cliente">Nome do cliente</label>
                            </div>
                            <div className="input-field col s6">
                                <input disabled value="" id="quantidade" type="number" className="validate" />
                                <label htmlFor="quantidade">Quantidade de Produto ou Serviço</label>
                            </div>
                        </div>
                        <div className=" collection">
                            <div className="input-field col s6">
                                <input disabled value="" id="nome_cliente" type="text" className="validate" />
                                <label htmlFor="nome_cliente">Nome do cliente</label>
                            </div>
                            <div className="input-field col s6">
                                <input disabled value="" id="quantidade" type="number" className="validate" />
                                <label htmlFor="quantidade">Quantidade de Produto ou Serviço</label>
                            </div>
                        </div>
                        <div className=" collection">
                            <div className="input-field col s6">
                                <input disabled value="" id="nome_cliente" type="text" className="validate" />
                                <label htmlFor="nome_cliente">Nome do cliente</label>
                            </div>
                            <div className="input-field col s6">
                                <input disabled value="" id="quantidade" type="number" className="validate" />
                                <label htmlFor="quantidade">Quantidade de Produto ou Serviço</label>
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