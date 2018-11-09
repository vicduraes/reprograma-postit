import { combineReducers } from 'redux'

let usuarioInicial = null

const json = localStorage.getItem('usuario')
if (json) {
    usuarioInicial = JSON.parse(json)
}


function usuario(state = usuarioInicial, action) {
    switch (action.type) {
        case 'LOGA_USUARIO':
            const usuarioLogado = action.dados
            const json = JSON.stringify(usuarioLogado)
            localStorage.setItem('usuario', json)
            return usuarioLogado
        case 'DESLOGA_USUARIO':
            localStorage.removeItem('usuario')
            const usuarioDeslogado = null
            return usuarioDeslogado
        default:
            return state
    }
}

function postits(state = [], action) {
    switch (action.type) {
        case 'CADASTRA_POSTIT':
            return state.concat(action.dados) // os dados recebidos aqui são da cadastraPostit, então para acessar os dados precisa acessar o 'objeto' action//
        case 'ALTERA_POSTIT':
            return state.map(item => item.id === action.dados.id ? action.dados : item)
        default:
            return state
    }
}

const reducers = combineReducers({
    usuario: usuario,
    postits: postits
})

export default reducers