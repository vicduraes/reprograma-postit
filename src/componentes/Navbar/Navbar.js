import React from "react";
import "./Navbar.css";
import logo from "./logo.png";
import Menu from "../Menu/Menu";

//<Navbar usuario={usuario}>//

function Navbar(props) {
    return (
        <header className="navbar">
            <a href="/">
                <img className="navbar__logo" src={logo} alt="logo" />
            </a>
            <Menu usuario={props.usuario} deslogaUsuario={props.deslogaUsuario}/>
        </header>
    )
}

export default Navbar;
