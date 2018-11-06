import React from "react";
import ReactDOM from "react-dom";
import { withRouter, BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import {Provider, connect} from "react-redux";
import store from "./redux/store";
import './index.css';
import Home from "./paginas/Home/Home";
import Login from "./paginas/Login/Login";
import Conta from "./paginas/Conta/Conta";
import QuemSomos from "./paginas/Quem Somos/QuemSomos";
import Contato from "./paginas/Contato/Contato";
import NaoEncontrada from "./paginas/NaoEncontrada/NaoEncontrada";
import Navbar from "./componentes/Navbar/Navbar";

function App(props) {
    const usuario = props.usuario;
    const deslogaUsuario = props.deslogaUsuario;
    const logaUsuario = props.logaUsuario;

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

// const state ={
//     usuario: {"email: email@email.com"}
// }

function dadosParaComponente(state){
    const props = {
        usuario: state.usuario
    }
    return props
}

function funcoesParaAcoesViaProps(dispatch){
    const props = {
        logaUsuario: (dados) => {
            const acao = {
                type: "LOGA_USUARIO",
                dados: dados
            }
            dispatch(acao)
        },
        deslogaUsuario: () =>{
            const acao = {
                type: "DESLOGA_USUARIO"
            }
            dispatch(acao)
        }
    }
    return props
}

const conectaNaStore = connect(dadosParaComponente, funcoesParaAcoesViaProps)

const AppConectada = withRouter(conectaNaStore(App))

conectaNaStore(App)

ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
        <AppConectada />
    </BrowserRouter>
    </Provider>,
    document.querySelector("#projeto")
)