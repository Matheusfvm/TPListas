/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from "react";
import materialize from 'materialize-css';
import api from "../api";

export default function ListaProduto(props) {
    const estilo = `collection-item active ${props.tema}`
    const [filtro, setFiltro] = useState('')
    const [produtos, setProdutos] = useState([
        {id: 1, nomeProduto: 'Produto1', consumoHomem: 10, consumoMulher: 11},
        {id: 2, nomeProduto: 'Produto2', consumoHomem: 2, consumoMulher: 1},
        {id: 3, nomeProduto: 'Produto3', consumoHomem: 3, consumoMulher: 2},
        {id: 4, nomeProduto: 'Produto4', consumoHomem: 4, consumoMulher: 14},
        {id: 5, nomeProduto: 'Produto5', consumoHomem: 5, consumoMulher: 35},
        {id: 6, nomeProduto: 'Produto6', consumoHomem: 6, consumoMulher: 9},
        {id: 7, nomeProduto: 'Produto7', consumoHomem: 7, consumoMulher: 45},
        {id: 8, nomeProduto: 'Produto8', consumoHomem: 8, consumoMulher: 5},
        {id: 9, nomeProduto: 'Produto9', consumoHomem: 9, consumoMulher: 15},
        {id: 10, nomeProduto: 'Produto10', consumoHomem: 12, consumoMulher: 6},
        {id: 11, nomeProduto: 'Produto11', consumoHomem: 13, consumoMulher: 5},
        {id: 12, nomeProduto: 'Produto12', consumoHomem: 14, consumoMulher: 4},
        {id: 13, nomeProduto: 'Produto13', consumoHomem: 15, consumoMulher: 3},
        {id: 14, nomeProduto: 'Produto14', consumoHomem: 16, consumoMulher: 2},
        {id: 15, nomeProduto: 'Produto15', consumoHomem: 17, consumoMulher: 1}
    ])
    const [maisCunsumidos, setMaisConsumidos] = useState([])
    const [maisCunsumidosMulheres, setMaisConsumidosMulheres] = useState([])
    const [maisCunsumidosHomens, setMaisConsumidosHomens] = useState([])

    function ordenaMaisCunsumidos(){
        let lista = []
        let listaControle = []
        listaControle = produtos.sort((produto1, produto2)=>{return (produto2.consumoHomem + produto2.consumoMulher) - (produto1.consumoHomem + produto1.consumoMulher)})
        listaControle.map((produto, index)=>{
            if(index < 10){
                lista.push(produto)
            }
        })
        setMaisConsumidos(lista)
    }

    function ordenaMaisCunsumidosHomens(){
        let lista = []
        let listaControle = []
        listaControle = produtos.sort((produto1, produto2)=>{return produto2.consumoHomem - produto1.consumoHomem})
        listaControle.map((produto, index)=>{
            if(index < 5){
                lista.push(produto)
            }
        })
        setMaisConsumidosHomens(lista)
    }

    function ordenaMaisCunsumidosMulheres(){
        let lista = []
        let listaControle = []
        listaControle = produtos.sort((produto1, produto2)=>{return produto2.consumoMulher - produto1.consumoMulher})
        listaControle.map((produto, index)=>{
            if(index < 5){
                lista.push(produto)
            }
        })
        setMaisConsumidosMulheres(lista)
    }

    //============= Pega Lista =============

    async function getProdutos(){
        await api.get('/listaProduto').then((resposta)=>{
            console.log(resposta.data)
            setProdutos(resposta.data)
        })
    }

    //======================================



    useEffect(() => {
        const select = document.querySelectorAll('select');
        materialize.FormSelect.init(select);
        getProdutos()
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
            <a className="waves-effect waves-light btn col s2 offset-s4" onClick={(e) => props.seletorView("CadastroProduto", e)}>Produto<i class="material-icons left">add</i></a>
        </div>
        <div className="collection">
        {filtro === '' &&
                produtos.map((produto, index)=>{
                    return(
                        <a className="collection-item" onClick={(e) => props.seletorView("atualizaProduto-" + produto.id, e)}>Produto: {produto.nomeProduto} | Consumo Homens: {produto.consumoHomem} | Consumo Mulheres: {produto.consumoMulher} | Consumo Total: {produto.consumoHomem + produto.consumoMulher}</a>
                    )
                })
            }
            {filtro === "10MaisConsumidos" &&
                maisCunsumidos.map((produto, index)=>{
                    return(
                        <a className="collection-item" onClick={(e) => props.seletorView("atualizaProduto-" + produto.id, e)}>Produto: {produto.nomeProduto} | Consumo Homens: {produto.consumoHomem} | Consumo Mulheres: {produto.consumoMulher} | Consumo Total: {produto.consumoHomem + produto.consumoMulher}</a>
                    )
                })
            }
            {filtro === "5MaisConsumidosMulheres" &&
                maisCunsumidosMulheres.map((produto, index)=>{
                    return(
                        <a className="collection-item" onClick={(e) => props.seletorView("atualizaProduto-" + produto.id, e)}>Produto: {produto.nomeProduto} | Consumo Homens: {produto.consumoHomem} | Consumo Mulheres: {produto.consumoMulher} | Consumo Total: {produto.consumoHomem + produto.consumoMulher}</a>
                    )
                })
            }
            {filtro === "5MaisConsumidosHomens" &&
                maisCunsumidosHomens.map((produto, index)=>{
                    return(
                        <a className="collection-item" onClick={(e) => props.seletorView("atualizaProduto-" + produto.id, e)}>Produto: {produto.nomeProduto} | Consumo Homens: {produto.consumoHomem} | Consumo Mulheres: {produto.consumoMulher} | Consumo Total: {produto.consumoHomem + produto.consumoMulher}</a>
                    )
                })
            }
        </div>
        </>
    )
}