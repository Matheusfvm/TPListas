
import { useEffect } from "react"
import { useState } from "react"

export default function AlteraServico (props){
    const estiloBotao = `btn waves-effect waves-light ${props.tema}`

    let [descricaoServico, setDescricaoServico] = useState(props.numeroServico)
    let [precoServico, setPrecoServico] = useState(props.numeroServico + '.00')
    

    async function getDados(){
        // Pega dados de um backend usando o id do cliente vindo do props
        // await api.get(`/updateServico/${props.numeroServico}`).then((resposta)=>{
        //     setDescricaoServico(resposta.descricaoServico)
        //     setPrecoServico(resposta.precoServico)
        // })
    }

    function mascaraDinheiro(evento){
        let digitado = evento.target.value.slice(-1)
        if((!isNaN(digitado) || (digitado === '.' && !evento.target.value.slice(0, -1).includes('.')))){
            setPrecoServico(evento.target.value)
        }
    }


    useEffect(() => {
        
        
    }, [])



    return(
        <div className="row">
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s12">
                        <input id="descricaoServico" type="text" className="validate"  placeholder="Serviço" value={descricaoServico} 
                        onChange={(e)=>{setDescricaoServico(e.target.value)}}/>
                    </div>
                    
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="precoServico" type="text" className="validate" placeholder="Preço" 
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