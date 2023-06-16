/* eslint-disable jsx-a11y/anchor-is-valid */
import materialize from 'materialize-css';
import { useState, useEffect } from "react";

export default function ListaServico(props) {
    const estilo = `collection-item active ${props.tema}`
    const [filtro, setFiltro] = useState('')
    const [servicos, setServicos] = useState([
        {id: 1, nomeServico: 'Servico1', consumoHomem: 10, consumoMulher: 11},
        {id: 2, nomeServico: 'Servico2', consumoHomem: 2, consumoMulher: 1},
        {id: 3, nomeServico: 'Servico3', consumoHomem: 3, consumoMulher: 2},
        {id: 4, nomeServico: 'Servico4', consumoHomem: 4, consumoMulher: 14},
        {id: 5, nomeServico: 'Servico5', consumoHomem: 5, consumoMulher: 35},
        {id: 6, nomeServico: 'Servico6', consumoHomem: 6, consumoMulher: 9},
        {id: 7, nomeServico: 'Servico7', consumoHomem: 7, consumoMulher: 45},
        {id: 8, nomeServico: 'Servico8', consumoHomem: 8, consumoMulher: 5},
        {id: 9, nomeServico: 'Servico9', consumoHomem: 9, consumoMulher: 15},
        {id: 10, nomeServico: 'Servico10', consumoHomem: 12, consumoMulher: 6},
        {id: 11, nomeServico: 'Servico11', consumoHomem: 13, consumoMulher: 5},
        {id: 12, nomeServico: 'Servico12', consumoHomem: 14, consumoMulher: 4},
        {id: 13, nomeServico: 'Servico13', consumoHomem: 15, consumoMulher: 3},
        {id: 14, nomeServico: 'Servico14', consumoHomem: 16, consumoMulher: 2},
        {id: 15, nomeServico: 'Servico15', consumoHomem: 17, consumoMulher: 1}
    ])
    const [maisCunsumidos, setMaisConsumidos] = useState([])
    const [maisCunsumidosMulheres, setMaisConsumidosMulheres] = useState([])
    const [maisCunsumidosHomens, setMaisConsumidosHomens] = useState([])


    function ordenaMaisCunsumidos(){
        let lista = []
        let listaControle = []
        listaControle = servicos.sort((servico1, servico2)=>{return (servico2.consumoHomem + servico2.consumoMulher) - (servico1.consumoHomem + servico1.consumoMulher)})
        listaControle.map((servico, index)=>{
            if(index < 10){
                lista.push(servico)
            }
        })
        setMaisConsumidos(lista)
    }

    function ordenaMaisCunsumidosHomens(){
        let lista = []
        let listaControle = []
        listaControle = servicos.sort((servico1, servico2)=>{return servico2.consumoHomem - servico1.consumoHomem})
        listaControle.map((servico, index)=>{
            if(index < 5){
                lista.push(servico)
            }
        })
        setMaisConsumidosHomens(lista)
    }

    function ordenaMaisCunsumidosMulheres(){
        let lista = []
        let listaControle = []
        listaControle = servicos.sort((servico1, servico2)=>{return servico2.consumoMulher - servico1.consumoMulher})
        listaControle.map((servico, index)=>{
            if(index < 5){
                lista.push(servico)
            }
        })
        setMaisConsumidosMulheres(lista)
    }

    useEffect(() => {
        const select = document.querySelectorAll('select');
        materialize.FormSelect.init(select);
        //getClientes()
        ordenaMaisCunsumidos()
        ordenaMaisCunsumidosHomens()
        ordenaMaisCunsumidosMulheres()
    },[]);

    return (
        <>
        <br/>
        <div className="row">
            <div className="input-field col s4 offset-s1">
                <select value={filtro} onChange={(e)=>{setFiltro(e.target.value)}}>
                    <option value="" selected>Sem filtro</option>
                    <option value="10MaisConsumidos">10 mais consumidos</option>
                    <option value="5MaisConsumidosMulheres">5 mais consumidos por mulheres</option>
                    <option value="5MaisConsumidosHomens">5 mais consumidos por homens</option>
                </select>
                <label>Filtro</label>
            </div>
            <a className="waves-effect waves-light btn col s2 offset-s4" onClick={(e) => props.seletorView("CadastroServico", e)}>Serviço<i class="material-icons left">add</i></a>
        </div>
        <div className="collection">
            {filtro === '' &&
                servicos.map((servico, index)=>{
                    return(
                        <a className="collection-item" onClick={(e) => props.seletorView("atualizaServico-" + servico.id, e)}>Serviço: {servico.nomeServico} | Consumo Homens: {servico.consumoHomem} | Consumo Mulheres: {servico.consumoMulher} | Consumo Total: {servico.consumoHomem + servico.consumoMulher}</a>
                    )
                })
            }
            {filtro === "10MaisConsumidos" &&
                maisCunsumidos.map((servico, index)=>{
                    return(
                        <a className="collection-item" onClick={(e) => props.seletorView("atualizaServico-" + servico.id, e)}>Serviço: {servico.nomeServico} | Consumo Homens: {servico.consumoHomem} | Consumo Mulheres: {servico.consumoMulher} | Consumo Total: {servico.consumoHomem + servico.consumoMulher}</a>
                    )
                })
            }
            {filtro === "5MaisConsumidosMulheres" &&
                maisCunsumidosMulheres.map((servico, index)=>{
                    return(
                        <a className="collection-item" onClick={(e) => props.seletorView("atualizaServico-" + servico.id, e)}>Serviço: {servico.nomeServico} | Consumo Homens: {servico.consumoHomem} | Consumo Mulheres: {servico.consumoMulher} | Consumo Total: {servico.consumoHomem + servico.consumoMulher}</a>
                    )
                })
            }
            {filtro === "5MaisConsumidosHomens" &&
                maisCunsumidosHomens.map((servico, index)=>{
                    return(
                        <a className="collection-item" onClick={(e) => props.seletorView("atualizaServico-" + servico.id, e)}>Serviço: {servico.nomeServico} | Consumo Homens: {servico.consumoHomem} | Consumo Mulheres: {servico.consumoMulher} | Consumo Total: {servico.consumoHomem + servico.consumoMulher}</a>
                    )
                })
            }
        </div>
        </>
    )
}