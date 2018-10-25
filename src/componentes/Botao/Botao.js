import React from "react";
import './Botao.css';

export function Botao(props) {
    let classes = "botao";
    if (props.desabilitado) {
        classes += " botao--desabilitado";
    }
    return <input type="submit" className={classes} value={props.value} />;
}

export default Botao;