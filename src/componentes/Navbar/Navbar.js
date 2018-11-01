import React from "react";
import "./Navbar.css";
import logo from "./logo.png";

function Navbar() {
    return (
        <header className="navbar">
            <a href="/">
                <img className="navbar__logo" src={logo} alt="logo" />
            </a>

        </header>
    )
}

export default Navbar;
