import { Component } from "react";

type props = {
    tema: string
    seletorView: Function
}

export default class VinculaProdutoServico extends Component<props> {
    
    render() {
        let estiloBotao = `btn waves-effect waves-light ${this.props.tema}`
        return (
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="col s12 center">
                            <h5>Produto(s)</h5>
                        </div>
                        <div className="input-field col s6">
                            <input id="id_produto" type="number" className="validate" />
                            <label htmlFor="id_produto">Id do Produto</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="quantidade_produto" type="number" className="validate" />
                            <label htmlFor="quantidade_produto">Quantidade</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12 center">
                            <h5>Serviço(s)</h5>
                        </div>
                        <div className="input-field col s6">
                            <input id="numero_rg" type="number" className="validate" />
                            <label htmlFor="numero_rg">Id do Serviço</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="data_rg" type="number" className="validate" />
                            <label htmlFor="data_rg">Quantidade</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12 center">
                            <button className={estiloBotao} type="submit" name="action" onClick={(e) => this.props.seletorView('Consumo Cliente', e)}>
                                <i className="material-icons left">send</i>{'Adicionar'}
                            </button>
                            <a className="waves-effect waves-light blue darken-4 btn" onClick={(e) => this.props.seletorView('Consumo Cliente', e)}><i className="material-icons left">cancel</i>{'Cancelar'}</a>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}