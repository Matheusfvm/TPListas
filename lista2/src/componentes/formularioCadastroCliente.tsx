import { Component } from "react";

type props = {
    tema: string
    seletorView: Function
}

export default class FormularioCadastroCliente extends Component<props> {
    
    render() {
        let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`
        return (
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="nome_completo" type="text" className="validate" />
                            <label htmlFor="nome_complete">Nome Complete</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="nome_social" type="text" className="validate" />
                            <label htmlFor="nome_social">Nome Social</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="genero" type="text" className="validate" />
                            <label htmlFor="genero">Gênero</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="data_cadastro" type="date" className="validate" />
                            <label htmlFor="data_cadastro">Data do Cadastro</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="numero_cpf" type="number" className="validate" />
                            <label htmlFor="numero_cpf">Número do CPF</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="data_cpf" type="date" className="validate" />
                            <label htmlFor="data_cpf">Data de Emissão do CPF </label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12 center">
                            <h5>RG(s)</h5>
                        </div>
                        <div className="input-field col s6">
                            <input id="numero_rg" type="number" className="validate" />
                            <label htmlFor="numero_rg">Número do RG</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="data_rg" type="date" className="validate" />
                            <label htmlFor="data_rg">Data de Emissão RG</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12 center">
                            <h5>Telefones(s)</h5>
                        </div>
                        <div className="input-field col s6">
                            <input id="numero_rg" type="number" className="validate" />
                            <label htmlFor="numero_rg">DDD do Telefone</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="data_rg" type="number" className="validate" />
                            <label htmlFor="data_rg">Número do Telefone</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12 center">
                            <button className={estiloBotao} type="submit" name="action">Cadastrar
                                <i className="material-icons left">send</i>
                            </button>
                            <a className="waves-effect waves-light blue darken-4 btn" onClick={(e) => this.props.seletorView('Clientes', e)}><i className="material-icons left">cancel</i>{'Cancelar'}</a>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}