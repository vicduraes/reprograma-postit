import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "./logo.png";
import Menu from "../Menu/Menu";

//<Navbar usuario={usuario}>//

function Navbar(props) {
    return (
        <header className="navbar">
            <Link to="/">
                <img className="navbar__logo" src={logo} alt="logo" />
            </Link>
            <Menu usuario={props.usuario} deslogaUsuario={props.deslogaUsuario} />
        </header>
    )
}

function passaNoPropsDadosDoEstado(state) {
    return {
        usuario: state.usuario
    }
}

function passaNoPropsAcao(dispatch) {
    return {
        deslogaUsuario: () => {
            const acao = {
                type: "DESLOGA_USUARIO"
            }
            dispatch(acao)
        }
    }
}

const conectaNaStore = connect(passaNoPropsDadosDoEstado, passaNoPropsAcao)

const NavbarConectado = conectaNaStore(Navbar)

export default NavbarConectado;
