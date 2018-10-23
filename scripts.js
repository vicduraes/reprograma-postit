const linkCriarConta = document.createElement("a");
linkCriarConta.className = "link";
linkCriarConta.href = "/conta"
linkCriarConta.appendChild(document.createTextNode("Criar uma conta"));

const linkLogin = document.createElement("a");
linkLogin.className = "link";
linkLogin.href = "/login"
linkLogin.appendChild(document.createTextNode("Fazer login"));

const formulario = document.createElement("form");
formulario.appendChild(linkCriarConta);
formulario.appendChild(linkLogin);

const divisaoProjeto = document.querySelector("#projeto");
divisaoProjeto.appendChild(formulario); 