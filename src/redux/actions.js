export function logaUsuario(dados) {
    return {
        type: "LOGA_USUARIO",
        dados //dados: dados - sintaxe atual//
    }
}

export function deslogaUsuario() {
    return {
        type: "DESLOGA_USUARIO"
    }
}

export function cadastraPostit (dados){
    return {
        type: "CADASTRA_POSTIT",
        dados //dados: dados - sintaxe atual//
    }
}