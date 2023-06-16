
import { useEffect } from "react"
import { useState } from "react"

export default function AlteraProduto (props){
    const estiloBotao = `btn waves-effect waves-light ${props.tema}`

    let [descricaoProduto, setDescricaoProduto] = useState(props.numeroProduto)
    let [precoProduto, setPrecoProduto] = useState(props.numeroProduto + '.00')
    

    async function getDados(){
        // Pega dados de um backend usando o id do cliente vindo do props
        // await api.get(`/updateProduto/${props.numeroProduto}`).then((resposta)=>{
        //     setDescricaoProduto(resposta.descricaoProduto)
        //     setPrecoProduto(resposta.precoProduto)
        // })
    }

    function mascaraDinheiro(evento){
        let digitado = evento.target.value.slice(-1)
        if((!isNaN(digitado) || (digitado === '.' && !evento.target.value.slice(0, -1).includes('.')))){
            setPrecoProduto(evento.target.value)
        }
    }


    useEffect(() => {
        
        
    }, [])



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
                        <button className={estiloBotao} type="submit" name="action">Submit
                            <i className="material-icons right">send</i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}