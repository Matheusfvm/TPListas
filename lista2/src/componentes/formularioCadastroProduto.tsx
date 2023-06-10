import { Component } from "react";

type props = {
    tema: string
    seletorView: Function
}

export default class FormularioCadastroProduto extends Component<props> {
    render() {
        return (
            <div className="row ">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="product_name" type="text" className="validate" />
                            <label htmlFor="product_name">Nome do produto</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="product_price" type="number" className="validate" />
                            <label htmlFor="product_price">Preço</label>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
    
}