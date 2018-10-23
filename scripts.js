const linkCriarConta = React.createElement("a", {className: "link", href: "/conta", children: "Criar uma conta"});
const linkLogin = React.createElement("a", {className: "link", href: "/login", children: "Fazer login"});
const formulario = React.createElement("form", {children: [linkCriarConta, linkLogin]});
const divisaoProjeto = document.querySelector("#projeto");
ReactDOM.render(formulario, divisaoProjeto);
