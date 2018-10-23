const linkCriarConta = <a class="link" href="/conta">Criar uma conta</a>
const linkLogin = <a class="link" href="/login">Fazer login</a>
const formulario = (
    <form>
        {[linkCriarConta, linkLogin]}
    </form>
)
const divisaoProjeto = document.querySelector("#projeto");
ReactDOM.render(formulario, divisaoProjeto);
