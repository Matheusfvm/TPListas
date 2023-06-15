import { useEffect, useState } from "react"

export default function CadastroServico(props){
    let [descricaoServico, setDescricaoServico] = useState('')
    let [precoServico, setPrecoServico] = useState()
    const estiloBotao = `btn waves-effect waves-light ${props.tema}`


    // =========== Mascara preço ===========
    function mascaraDinheiro(evento){
        let digitado = evento.target.value.slice(-1)
        console.log('Ultimo:', digitado, ' Resto:', evento.target.value.slice(0, -1), evento.target.value.slice(0, -1).includes('.'))
        if((!isNaN(digitado) || (digitado === '.' && !evento.target.value.slice(0, -1).includes('.')))){
            setPrecoServico(evento.target.value)
        }
    }




    useEffect(() => {
        
      },[]);

      return(
        <div className="row">
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s12">
                        <input id="descricaoProduto" type="text" className="validate"  placeholder="Produto" value={descricaoServico} 
                        onChange={(e)=>{setDescricaoServico(e.target.value)}}/>
                    </div>
                    
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="precoProduto" type="text" className="validate" placeholder="Preço" 
                        value={precoServico} onChange={(e)=>{mascaraDinheiro(e)}}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        <button className={estiloBotao} type="submit" name="action">Submit
                            <i className="material-icons right">send</i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}