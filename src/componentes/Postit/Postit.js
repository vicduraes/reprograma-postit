import React, { Component } from "react";
import {cadastraPostit} from "../../redux/actions";
import {connect} from "react-redux";
import "./Postit.css";

class Postit extends Component {
    constructor(props) {
        super(props)
        // this.state: { }
    }

    cadastraOuAlteraPostit = (evento) => {
        evento.preventDefault ()
        const form = evento.target // o target é usada para acessar os dados do form//

        const dados = {
            id: `987535a5-8cfa-412b-8672-1e466617450${Math.random(100)}`,
            titulo: form.titulo.value,
            texto: form.texto.value
        }

        this.props.cadastraPostit(dados)

        form.reset()
    }

    render() {
        return (
            <form className="postit" onSubmit={this.cadastraOuAlteraPostit}>
                <input
                    className="postit__titulo"
                    type="text"
                    name="titulo"
                    placeholder="Título"
                    autoComplete="off"
                    defaultValue={this.props.titulo}
                />
                <textarea
                    className="postit__texto"
                    name="texto"
                    placeholder="Digite seu texto..."
                    rows={5}
                    autoComplete="off"
                    defaultValue={this.props.texto}
                />
                <input
                    className="postit__botao-concluir"
                    type="submit"
                    value="Concluído"
                />
            </form>
        )
    }
}

export default connect(
    null,
    {cadastraPostit}
) (Postit);