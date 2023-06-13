/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'


type props = {
    tema: string
    seletorView: Function
}

export default class DadoCliente extends Component<props> {
    render() {
        let estilo = this.props.tema
        return (
            <div id="espacoNavBar" className="col s12">
                <form className="row">
                    <div className="col s12 center">
                        <h5>Cliente ID</h5>
                    </div>
                    <div>
                        <div className="input-field col s6">
                            <input disabled value="" id="nome_completo" type="text" className="validate" />
                            <label htmlFor="nome_completo">Nome Completo</label>
                        </div>
                        <div className="input-field col s6">
                            <input disabled value="" id="nome_social" type="text" className="validate" />
                            <label htmlFor="nome_social">Nome Social</label>
                        </div>
                        <div className="input-field col s6">
                            <input disabled value="" id="genero" type="text" className="validate" />
                            <label htmlFor="genero">Gênero</label>
                        </div>
                        <div className="input-field col s6">
                            <input disabled value="" id="data_cadastro" type="text" className="validate" />
                            <label htmlFor="data_cadastro">Data do cadastro</label>
                        </div>
                        <div className="input-field col s6">
                            <input disabled value="" id="cpf" type="text" className="validate" />
                            <label htmlFor="cpf">Número do CPF</label>
                        </div>
                        <div className="input-field col s6">
                            <input disabled value="" id="data_cpf" type="text" className="validate" />
                            <label htmlFor="data_cpf">Data da emissão do CPF</label>
                        </div>
                        <div className="col s12 center">
                            <h5>RG(s)</h5>
                        </div>
                        <div className="input-field col s6">
                            <input disabled value="" id="rg" type="text" className="validate" />
                            <label htmlFor="rg">Número do RG</label>
                        </div>
                        <div className="input-field col s6">
                            <input disabled value="" id="data_rg" type="text" className="validate" />
                            <label htmlFor="data_rg">Data da emissão do RG</label>
                        </div>
                        <div className="col s12 center">
                            <h5>Telefone(s)</h5>
                        </div>
                        <div className="input-field col s6">
                            <input disabled value="" id="ddd" type="text" className="validate" />
                            <label htmlFor="ddd">DDD do telefone</label>
                        </div>
                        <div className="input-field col s6">
                            <input disabled value="" id="numero_telefone" type="text" className="validate" />
                            <label htmlFor="numero_telefone">Número do telefone</label>
                        </div>
                    </div>
                </form>
                <div id="espacoNavBar" className="row col s9 center">
                    <div className="center">
                        <a className="waves-effect waves-light blue darken-4 btn" onClick={(e) => this.props.seletorView('Cadastrar Cliente', e)}><i className="material-icons left">edit</i>{'Alterar cadastro'}</a>
                        <a className="waves-effect waves-light blue darken-4 btn" onClick={(e) => this.props.seletorView('Listar Clientes', e)}><i className="material-icons left">delete</i>{'Apagar Cliente'}</a>
                        <a className="waves-effect waves-light blue darken-4 btn" onClick={(e) => this.props.seletorView('Listar Clientes', e)}><i className="material-icons left">arrow_back</i>{'Voltar'}</a>
                    </div> 
                </div>              
            </div>                
        )
    }
}