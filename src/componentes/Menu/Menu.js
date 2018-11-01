import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Menu.css";

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = { aberto: false }
    }

    render() {
        return (
            <nav className="navbar-menu">
                <a className="navbar-menu__botao"> Menu </a>
                <ul className="navbar-menu__opcoes">
                    <li>
                        <NavLink to="/quem-somos" activeClassName="navbar-menu__opcoes--ativo">Quem somos</NavLink>
                    </li>

                    <li>
                        <NavLink to="/contato" activeClassName="navbar-menu__opcoes--ativo">Contato</NavLink>
                    </li>

                    <li>
                        <NavLink to="/login" activeClassName="navbar-menu__opcoes--ativo">Sair</NavLink>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Menu;