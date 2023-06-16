/* eslint-disable jsx-a11y/anchor-is-valid */
import materialize from 'materialize-css';
import { useEffect, useState } from 'react';
import api from '../api';

export default function ListaClientes(props) {
    const estilo = `collection-item active ${props.tema}`

    const [clientes, setClientes] = useState([
    {id:1, nome:"Cliente1", consumoQuantidade:10, consumoValor:50.90, genero:"Masculino"}, 
    {id:2, nome:"Cliente2", consumoQuantidade:9, consumoValor:50.80, genero:"Feminino"}, 
    {id:3, nome:"Cliente3", consumoQuantidade:8, consumoValor:45.90, genero:"Feminino"}, 
    {id:4, nome:"Cliente4", consumoQuantidade:4, consumoValor:23.90, genero:"Masculino"},
    {id:5, nome:"Cliente5", consumoQuantidade:1, consumoValor:4.90, genero:"Feminino"},
    {id:6, nome:"Cliente6", consumoQuantidade:2, consumoValor:7.33, genero:"Masculino"},
    {id:7, nome:"Cliente7", consumoQuantidade:3, consumoValor:12.00, genero:"Feminino"},
    {id:8, nome:"Cliente8", consumoQuantidade:4, consumoValor:16.41, genero:"Masculino"},
    {id:9, nome:"Cliente9", consumoQuantidade:5, consumoValor:21.76, genero:"Masculino"},
    {id:10, nome:"Cliente10", consumoQuantidade:6, consumoValor:33.90, genero:"Feminino"},
    {id:11, nome:"Cliente11", consumoQuantidade:7, consumoValor:37.90, genero:"Feminino"},
    {id:12, nome:"Cliente12", consumoQuantidade:5, consumoValor:21.76, genero:"Masculino"}])
    const [lista10MaioresQuantidade, setLista10MaioresQuantidade] = useState([])
    const [lista10MenoresQuantidade, setLista10MenoresQuantidade] = useState([])
    const [lista5MaioresValor, setLista5MaioresValor] = useState([])
    const [filtro, setFiltro] = useState('')


    async function getClientes(){
        await api.get(`/listaClientes`).then((resposta)=>{
            console.log(resposta.data)
        })
    }

    function Maiores10Quantidade(){
        let listaControle = []
        let lista = []
        listaControle = clientes.sort((cliente1, cliente2)=>{return cliente2.consumoQuantidade - cliente1.consumoQuantidade})
        listaControle.map((cliente, index)=>{
            if(index < 10){
                lista.push(cliente)
            }
        })
        console.log("Maiores", lista)
        setLista10MaioresQuantidade(lista)
    }

    function Menores10Quantidade(){
        let listaControle = []
        let lista = []
        listaControle = clientes.sort((cliente1, cliente2)=>{return cliente1.consumoQuantidade - cliente2.consumoQuantidade})
        listaControle.map((cliente, index)=>{
            if(index < 10){
                lista.push(cliente)
            }
        })
        console.log("Menores", lista)
        setLista10MenoresQuantidade(lista)
    }

    function Maiores5Valor(){
        let listaControle = []
        let lista = []
        listaControle = clientes.sort((cliente1, cliente2)=>{return cliente2.consumoValor - cliente1.consumoValor})
        listaControle.map((cliente, index)=>{
            if(index < 5){
                lista.push(cliente)
            }
        })
        console.log("Maiores VALOR", lista)
        setLista5MaioresValor(lista)
    }

    useEffect(() => {
        const select = document.querySelectorAll('select');
        materialize.FormSelect.init(select);
        getClientes()
        Maiores10Quantidade()
        Menores10Quantidade()
        Maiores5Valor()
    },[]);

    useEffect(()=>{
        console.log(filtro)
    }, [filtro])

    return (
        <>
        <br />
        <div className="row">
            <div className="input-field col s4 offset-s1">
                <select value={filtro} onChange={(e)=>{setFiltro(e.target.value)}}>
                    <option value="" selected>Sem filtro</option>
                    <option value="10MaioresQuantidade">10 Maiores Consumidores (Quantidade)</option>
                    <option value="ListaMulheres">Listar clientes mulheres</option>
                    <option value="ListaHomens">Listar clientes homens</option>
                    <option value="10MenoresQuantidade">10 Menores Consumidores (Quantidade)</option>
                    <option value="5MaioresValor">5 Maiores Consumidores (Valor)</option>
                </select>
                <label>Filtro</label>
            </div>
            <a className="waves-effect waves-light btn col s2 offset-s4" onClick={(e) => props.seletorView("CadastroCliente", e)}>Cliente<i class="material-icons left">add</i></a>
        </div>
        <div className="collection">
            {filtro === '5MaioresValor' &&
                lista5MaioresValor.map((cliente, index)=>{
                    <a className="collection-item" onClick={(e) => props.seletorView("atualizaCliente-" + cliente.id, e)}>Nome: {cliente.nome} | ConsumoQunatidade: {cliente.consumoQuantidade} | ConsumoValor: {cliente.consumoValor} | Genero: {cliente.genero}</a>
                })
            }
            {filtro === '10MenoresQuantidade' &&
                lista10MenoresQuantidade.map((cliente, index)=>{
                    return(
                        <a className="collection-item" onClick={(e) => props.seletorView("atualizaCliente-" + cliente.id, e)}>Nome: {cliente.nome} | ConsumoQunatidade: {cliente.consumoQuantidade} | ConsumoValor: {cliente.consumoValor} | Genero: {cliente.genero}</a>
                    )
                })
            }
            {filtro === '10MaioresQuantidade' &&
                lista10MaioresQuantidade.map((cliente, index)=>{
                    return(
                        <a className="collection-item" onClick={(e) => props.seletorView("atualizaCliente-" + cliente.id, e)}>Nome: {cliente.nome} | ConsumoQunatidade: {cliente.consumoQuantidade} | ConsumoValor: {cliente.consumoValor} | Genero: {cliente.genero}</a>
                    )
                })
            }
            {filtro === 'ListaMulheres' &&
                clientes.map((cliente, index)=>{
                    if(cliente.genero === 'Feminino'){
                        return(
                            <a className="collection-item" onClick={(e) => props.seletorView("atualizaCliente-" + cliente.id, e)}>Nome: {cliente.nome} | ConsumoQunatidade: {cliente.consumoQuantidade} | ConsumoValor: {cliente.consumoValor} | Genero: {cliente.genero}</a>
                        )
                    }
                })
            }
            {filtro === 'ListaHomens' &&
                clientes.map((cliente, index)=>{
                    if(cliente.genero === 'Masculino'){
                        return(
                            <a className="collection-item" onClick={(e) => props.seletorView("atualizaCliente-" + cliente.id, e)}>Nome: {cliente.nome} | ConsumoQunatidade: {cliente.consumoQuantidade} | ConsumoValor: {cliente.consumoValor} | Genero: {cliente.genero}</a>
                        )
                    }
                })
            }
            {filtro === '' &&
                clientes.map((cliente, index)=>{
                    return(
                        <a className="collection-item" onClick={(e) => props.seletorView("atualizaCliente-" + cliente.id, e)}>Nome: {cliente.nome} | ConsumoQunatidade: {cliente.consumoQuantidade} | ConsumoValor: {cliente.consumoValor} | Genero: {cliente.genero}</a>
                    )
                })
            }
        </div>
        </>
    )
}