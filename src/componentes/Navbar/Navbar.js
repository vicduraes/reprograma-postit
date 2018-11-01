import React from "react";
import "./Navbar.css";
import logo from "./logo.png";
import Menu from "../Menu/Menu";

function Navbar() {
    return (
        <header className="navbar">
            <a href="/">
                <img className="navbar__logo" src={logo} alt="logo" />
            </a>
            <Menu/>
        </header>
    )
}

export default Navbar;
