import { useEffect, useState } from "react"
import materialize from 'materialize-css';
import api from "../api";

export default function FormularioCadastroCliente(props){
    const estiloBotao = `btn waves-effect waves-light ${props.tema}`
    const [nome, setNome] = useState('')
    const [sobrenome, setSobrenome] = useState('')
    const [cpf, setCpf] = useState({numeroCpf:'', dataEmissao:''})
    const [genero, setGenero] = useState('')
    const [rgs, setRgs] = useState([{numeroRG:'', dataEmissao:''}])
    const [telefone, setTelefone] = useState([{ddd:'', numeroTelefone:''}])
    const [render, setRender] = useState(0)


    // ============== Cadastro ==============
    async function cadastraCliente(evento){
        api.post('/cadastroCliente', {nome, sobrenome, cpf, genero, rgs, telefone}).then((resposta)=>{props.seletorView('Clientes', evento)})
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
        const select = document.querySelectorAll('select');
        materialize.FormSelect.init(select);
        //getClientes()
    },[]);

    useEffect(() => {
        console.log(telefone)
        console.log(rgs)
    },[telefone, rgs, render]);

    return (
        <div className="row">
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s4">
                        <input id="first_name" type="text" className="validate" value={nome} onChange={(e)=>{setNome(e.target.value)}}  placeholder="nome"/>
                    </div>
                    <div className="input-field col s4">
                        <input id="last_name" type="text" className="validate" value={sobrenome} onChange={(e)=>{setSobrenome(e.target.value)}} placeholder="sobrenome"/>
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

                <div className="row">
                    <div className="col s12">
                        <button className={estiloBotao} onClick={(e)=>{cadastraCliente(e)}} type="submit" name="action">Submit
                            <i className="material-icons right">send</i>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}