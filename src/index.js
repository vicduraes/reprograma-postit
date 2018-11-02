import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import './index.css';
import Home from "./paginas/Home/Home";
import Login from "./paginas/Login/Login";
import Conta from "./paginas/Conta/Conta";
import QuemSomos from "./paginas/Quem Somos/QuemSomos";
import Contato from "./paginas/Contato/Contato";
import NaoEncontrada from "./paginas/NaoEncontrada/NaoEncontrada";
import Navbar from "./componentes/Navbar/Navbar";

let usuario = JSON.parse(localStorage.getItem('usuario'));

function logaUsuario(dados) {
    const json = JSON.stringify(dados) //Convertendo objetos para texto para armazenar//
    localStorage.setItem('usuario', json) //localStorage armazena os dados do browser, mas apenas pequenos dados//
    usuario = dados
    console.log('dados', dados)
}

function deslogaUsuario (){
    localStorage.removeItem('usuario');
    usuario = null
}

function App() {
    return (
        <div className="app">
            {<Navbar usuario={usuario} deslogaUsuario={deslogaUsuario}/>}
            <Switch>
                <Route path="/" exact render={() => {
                    return usuario ? <Home/> : <Redirect to="/login"/>
                }} />
                <Route path="/conta" component={Conta} />
                <Route path="/login" render={(props) => {
                    return <Login historico={props.history} logaUsuario={logaUsuario} />
                }}
                />
                <Route path="/quem-somos" component={QuemSomos} />
                <Route path="/contato" component={Contato} />
                <Route component={NaoEncontrada} /> 
            </Switch>
        </div>
    )
}

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.querySelector("#projeto")
)