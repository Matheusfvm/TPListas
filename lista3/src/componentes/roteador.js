import { useState } from "react";
import BarraNavegacao from "./barraNavegacao";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import ListaClientes from "./listaClientes";
import ListaProduto from "./listaProduto";
import ListaServico from "./listaServico";
import AlteraCliente from "./alteraCliente";
import CadastroProduto from "./cadastroProduto";
import CadastroServico from "./cadastroServico";
import AlteraProduto from "./alteraProduto";
import AlteraServico from "./alteraServico";

export default function Roteador() {
    const [tela, setTela] = useState('Clientes')

    const seletorView = (valor, e) => {
        e.preventDefault()
        setTela(valor)
    }

    const construirView = () => {

        if (tela === 'Clientes') {
            return (
                <>
                    <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Clientes', 'Produtos', 'Serviços']} />
                    <ListaClientes seletorView={seletorView} tema="purple lighten-4" />
                </>
            )} 
        else if (tela === 'Produtos'){
            return(
                <>
                    <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Clientes', 'Produtos', 'Serviços']}/>
                    <ListaProduto seletorView={seletorView} tema="purple lighten-4" />
                </>
            )}
        else if (tela === 'Serviços'){
            return(
                <>
                    <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Clientes', 'Produtos', 'Serviços']}/>
                    <ListaServico seletorView={seletorView} tema='purple lighten-4'/>
                </>
            )
        }
        else if (tela.slice(0, tela.search('-')) === "atualizaCliente"){
            console.log("FOIIII", tela);
            console.log(tela.slice(0, tela.search('-')));
            console.log(tela.slice(tela.search('-')+1));
            return(
                <>
                <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Clientes', 'Produtos', 'Serviços']}/>
                <AlteraCliente seletorView={seletorView} tema='purple lighten-4' numeroCliente={tela.slice(tela.search('-')+1)}/>
                </>
            )
        }
        else if (tela.slice(0, tela.search('-')) === "atualizaServico"){
            return(
                <>
                <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Clientes', 'Produtos', 'Serviços']}/>
                <AlteraServico seletorView={seletorView} tema='purple lighten-4' numeroServico={tela.slice(tela.search('-')+1)}/>
                </>
            )
        }
        else if (tela.slice(0, tela.search('-')) === "atualizaProduto"){
            return(
                <>
                <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Clientes', 'Produtos', 'Serviços']}/>
                <AlteraProduto seletorView={seletorView} tema='purple lighten-4' numeroProduto={tela.slice(tela.search('-')+1)}/>
                </>
            )
        }
        else if (tela === 'CadastroProduto'){
            return(
                <>
                <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Clientes', 'Produtos', 'Serviços']}/>
                <CadastroProduto seletorView={seletorView} tema='purple lighten-4'/>
                </>
            )
        }
        else if (tela === 'CadastroServico'){
            return(
                <>
                <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Clientes', 'Produtos', 'Serviços']}/>
                <CadastroServico seletorView={seletorView} tema='purple lighten-4'/>
                </>
            )
        }
        else {

            return (
                <>
                    <BarraNavegacao seletorView={seletorView} tema="purple lighten-4" botoes={['Clientes', 'Produtos', 'Serviços']} />
                    <FormularioCadastroCliente tema="purple lighten-4" />
                </>
            )
        }
    }

    return (
        construirView()
    )
}