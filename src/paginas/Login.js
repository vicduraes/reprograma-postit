import React from "react";
import Link from "../componentes/Link/Link";
import Botao from "../componentes/Botao/Botao";

function Login() {
    return (
    <main className="login">
    <h1>Login</h1>
    <p>Entre com seu email e senha</p>
    <Link url="/conta">Criar uma conta</Link>
    <Link url="/login">Fazer Login</Link>
    <Botao value="Enviar" />
    <Botao desabilitado value="Enviar" />
    </main>
);
} 

export default Login;