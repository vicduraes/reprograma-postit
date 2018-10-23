function Link (props){
    return (
        <a className="link" href={props.url}>
            {props.children}
        </a>
    )
}

function Botao(props){
    return <input type="submit" className="botao" value={props.value}/>
}

const paginaLogin = (
  <main className="pagina-login">
    <h1>Login</h1>
    <p>Entre com seu email e senha</p>
    <Link url="/conta">Criar uma conta</Link>
    <Botao value="Enviar"/>
  </main>  
)

const divisaoProjeto = document.querySelector("#projeto");
ReactDOM.render(paginaLogin, divisaoProjeto);