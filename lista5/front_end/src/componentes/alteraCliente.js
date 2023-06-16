import materialize from 'materialize-css';
import { useEffect } from "react"
import { useState } from "react"

export default function AlteraCliente (props){
    const estiloBotao = `btn waves-effect waves-light ${props.tema}`

    
    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [cpf, setCpf] = useState({numeroCpf:'', dataEmissao:''})
    const [genero, setGenero] = useState('')
    const [rgs, setRgs] = useState([{numeroRG:'', dataEmissao:''}])
    const [telefone, setTelefone] = useState([{ddd:'', numeroTelefone:''}])
    const [render, setRender] = useState(0)
    let [servicos, setServicos] = useState([{servicoNome:"Corte de cabelo", consumo:1}])
    let [produtos, setProdutos] = useState([{produtoNome:"Creme de barbear", consumo:0}, {produtoNome:"Batom Vermelho", consumo:1}])

    async function getDados(){
        // Pega dados de um backend usando o id do cliente vindo do props
        // await api.get(`/updateCliente/${props.numeroCliente}`).then((resposta)=>{
        //     setNome(reposta.nome)
        //     setSobrenome(resposta.sobrenome)
        //     setTelefone(resposta.telefone)
        //     let controleTelefone = []
        //     resposta.telefones.forEach(telefone => {
        //         comtroleTelefone.push(telefone)
        //     });
        //     setTelefone(controleTelefone)
        //     setEmail(email)
        // })

        // ===== SEM CONSUMIR UM BACKEND =====
        setNome("Nome" + props.numeroCliente)
        setSobrenome("Sobrenome"+  props.numeroCliente)
        setRender(render+1)
    }

    function alteraConsumo(evento, index, tipo){
        let controle = []
        if(tipo === "Serviços"){
            controle = servicos
            controle[index].consumo = evento.target.value
            setServicos(controle)
        }
        else{
            controle = produtos
            controle[index].consumo = evento.target.value
            setProdutos(controle)
        }
        setRender(render+1)
    }

    // ============== CPF ==============

    function mudaCpf(evento){
        let novoCpf = {numeroCpf:evento.target.value, dataEmissao:cpf.dataEmissao}
        setCpf(novoCpf)
    }

    function mudaDataCpf(evento){
        let novoCpf = {numeroCpf:cpf.numeroCpf, dataEmissao:evento.target.value}
        setCpf(novoCpf)
    }

    // ============== RGs ==============

    function adicionaRG(){
        let controleRg = rgs
        controleRg.push({numeroRG:'', dataEmissao:''})
        setRgs(controleRg)
        setRender(render+1)
    }

    function deletaRG(index){
        let controleRg = []
        rgs.map((rg, id)=>{
            if(id !== index){
                controleRg.push(rg)
            }
        })
        setRgs(controleRg)
        setRender(render+1)
    }

    function mudaRG(evento, index){
        let controleRg = []
        let novoRg = {numeroRG:evento.target.value, dataEmissao:rgs[index].dataEmissao}
        rgs.map((rg, id)=>{
            if(id !== index){
                controleRg.push(rg)
            }
            else{
                controleRg.push(novoRg)
            }
        })
        setRgs(controleRg)
        setRender(render+1)
    }

    function mudaDataRg(evento, index){
        let controleRg = []
        let novaData = {numeroRG:rgs[index].numeroRG, dataEmissao:evento.target.value}
        rgs.map((rg, id)=>{
            if(id !== index){
                controleRg.push(rg)
            }
            else{
                controleRg.push(novaData)
            }
        })
        setRgs(controleRg)
    }

    // ============== Telefone ==============

    function adicionarTelefone(){
        let telefoneControle = telefone
        telefoneControle.push({ddd:'', numeroTelefone:''})
        setTelefone(telefoneControle)
        setRender(render+1)
    }

    function deletaTelefone(index){
        let controleTelefone = []
        telefone.map((tel, id)=>{
            if(id !== index){
                controleTelefone.push(tel)
            }
        })        
        setTelefone(controleTelefone)
        setRender(render+1)
    }

    function mudaDdd(evento, index){
        let controleTelefone = []
        let novoDdd = {ddd:evento.target.value, numeroTelefone:telefone[index].numeroTelefone}
        telefone.map((tel, id)=>{
            if(id !== index){
                controleTelefone.push(tel)
            }
            else{
                controleTelefone.push(novoDdd)
            }
        })
        setTelefone(controleTelefone)
    }

    function mudaTelefone(evento, index){
        let controleTelefone = []
        let novoTelefone = {ddd:telefone[index].ddd, numeroTelefone:evento.target.value}
        telefone.map((tel, id)=>{
            if(id !== index){
                controleTelefone.push(tel)
            }
            else{
                controleTelefone.push(novoTelefone)
            }
        })
        setTelefone(controleTelefone)
    }


    useEffect(() => {
        if(nome === ''){
            getDados()
        }
        console.log(servicos)
        
    }, [render, servicos, produtos])

    useEffect(() => {
        const select = document.querySelectorAll('select');
        materialize.FormSelect.init(select);
        //getClientes()
    },[]);

    return (
        <div className="row">
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s4">
                        <input id="first_name" type="text" className="validate" value={nome} onChange={(e)=>{setNome(e)}}  placeholder="nome"/>
                    </div>
                    <div className="input-field col s4">
                        <input id="last_name" type="text" className="validate" value={sobrenome} onChange={(e)=>{setSobrenome(e)}} placeholder="sobrenome"/>
                    </div>
                    <div className="input-field col s4">
                        <select value={genero} onChange={(e)=>{setGenero(e.target.value)}}>
                            <option value="" selected>Gênero</option>
                            <option value="Feminino">Feminino</option>
                            <option value="Masculino">Masculino</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s8">
                        <input id="first_name" type="text" className="validate" value={cpf.numeroCpf} onChange={(e)=>{mudaCpf(e)}}  placeholder="CPF"/>
                    </div>
                    <div className="input-field col s4 row">
                        <p className="col s6">Data de emissão:</p>
                        <input id="last_name" type="date" className="validate col s6" value={cpf.dataEmissao} onChange={(e)=>{mudaDataCpf(e)}}/>
                    </div>
                </div>
                <hr/>
                <h4>RGs</h4>
                {rgs.map((rg, index)=>{
                    return(
                        <div className="row">
                            
                            <div className="input-field col s6">
                                <input type="text" className="validate" value={rgs[index].numeroRG} onChange={(e)=>{mudaRG(e, index)}} placeholder="RG" />
                            </div>
                            <div className="input-field col s4 row">
                                <p className="col s6">Data de emissão:</p>
                                <input id="last_name" type="date" className="validate col s6" value={rgs[index].dataEmissao} onChange={(e)=>{mudaDataRg(e, index)}}/>
                            </div>  
                            <div className="col s1 offset-s1">
                                <a class="btn-floating btn-tiny waves-effect waves-light" onClick={()=>{deletaRG(index)}}><i class="material-icons">cancel</i></a>
                            </div>
                        </div>      
                    )
                })}
                <a class="waves-effect waves-light btn" onClick={adicionaRG}><i class="material-icons left">add</i>RG</a>
                      
                <hr/>

                
                <h4>Telefones</h4>
                {telefone.map((tel, index)=>{
                    return(
                        <div className="row">
                            <a class="btn-floating btn-tiny waves-effect waves-light" onClick={()=>{deletaTelefone(index)}}><i class="material-icons">cancel</i></a>
                            <div className="input-field col s2">
                                <input id="telefone" type="text" className="validate" value={telefone[index].ddd} onChange={(e)=>{mudaDdd(e, index)}} maxLength={2} placeholder="DDD" />
                            </div>
                            <div className="input-field col s4">
                                <input id="telefone" type="text" className="validate" value={telefone[index].numeroTelefone} onChange={(e)=>{mudaTelefone(e, index)}} maxLength={9} placeholder="telefone" />
                            </div>  
                        </div>      
                    )
                })}
                <a class="waves-effect waves-light btn" onClick={adicionarTelefone}><i class="material-icons left">add</i>Telefone</a>
                      
                <hr/>


                <div className="col s6 collection with-header">
                    <h4 className="collection-header header">Serviços</h4>
                    {servicos.map((servico, index)=>{ 
                        return(
                            <>
                            <div className="collection-item">
                            <h5 className="col s8">{servico.servicoNome}</h5>
                            <p className="col s2">Consumiu: </p>
                            <input className="col s1" type="number" value={servico.consumo} onChange={(e)=>{alteraConsumo(e, index, "Serviços")}}/>
                            <p className="col s1">Vezes</p>
                            </div>
                            </>
                        )
                    })}
                    
                </div>
                <div className="col s6 collection with-header">
                    <h4 className="collection-header header">Produtos</h4>
                    {produtos.map((produto, index)=>{ 
                        return(
                            <div className="collection-item">
                                <h5 className="col s8">{produto.produtoNome}</h5>
                                <p className="col s2">Consumiu: </p>
                                <input className="col s1" type="number" value={produto.consumo} onChange={(e)=>{alteraConsumo(e, index, "Produtos")}}/>
                                <p className="col s1">Vezes</p>
                            </div>

                        )
                    })}

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