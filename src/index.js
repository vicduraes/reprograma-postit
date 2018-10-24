import React from "react"
import ReactDOM from "react-dom"
import './index.css'


function Link (props){
    return (
        <a className="link" href={props.url}>
            {props.children}
        </a>
    )
}

function Botao(props){
    let classes = "botao"
    if (props.desabilitado){
        classes += " botao--desabilitado"
    }
    return <input type="submit" className={classes} value={props.value}/>
}

const paginaLogin = (
  <main className="pagina-login">
    <h1>Login</h1>
    <p>Entre com seu email e senha</p>
    <Link url="/conta">Criar uma conta</Link>
    <Link url="/login">Fazer Login</Link>
    <Botao value="Enviar"/>
    <Botao desabilitado value="Enviar"/>
  </main>  
)

const divisaoProjeto = document.querySelector("#projeto");
ReactDOM.render(paginaLogin, divisaoProjeto);