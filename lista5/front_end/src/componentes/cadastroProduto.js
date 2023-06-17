import { useEffect, useState } from "react"
import api from "../api";

export default function CadastroProduto(props){
    let [descricaoProduto, setDescricaoProduto] = useState('')
    let [precoProduto, setPrecoProduto] = useState()
    const estiloBotao = `btn waves-effect waves-light ${props.tema}`


    // =========== Mascara preço ===========
    function mascaraDinheiro(evento){
        let digitado = evento.target.value.slice(-1)
        console.log('Ultimo:', digitado, ' Resto:', evento.target.value.slice(0, -1), evento.target.value.slice(0, -1).includes('.'))
        if((!isNaN(digitado) || (digitado === '.' && !evento.target.value.slice(0, -1).includes('.')))){
            setPrecoProduto(evento.target.value)
        }
    }

    // =========== Submit ===========

    async function cadastraProduto(){
        api.post('/cadastroServico', {descricaoProduto, precoProduto})
            .then((e)=>{props.seletorView('Serviços', e)})
    }
    
    // ==============================


    useEffect(() => {
        
      },[]);

    return(
        <div className="row">
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s12">
                        <input id="descricaoProduto" type="text" className="validate"  placeholder="Produto" value={descricaoProduto} 
                        onChange={(e)=>{setDescricaoProduto(e.target.value)}}/>
                    </div>
                    
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="precoProduto" type="text" className="validate" placeholder="Preço" 
                        value={precoProduto} onChange={(e)=>{mascaraDinheiro(e)}}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <button className={estiloBotao} onClick={cadastraProduto} type="submit" name="action">Submit
                            <i className="material-icons right">send</i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}