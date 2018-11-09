import React, { Component } from "react";
import { cadastraPostit, alteraPostit } from "../../redux/actions";
import { connect } from "react-redux";
import "./Postit.css";

class Postit extends Component {
    constructor(props) {
        super(props)
        this.state = { editando: false }
    }

    cadastraOuAlteraPostit = (evento) => {
        evento.preventDefault()
        const form = evento.target // o target é usada para acessar os dados do form//
        const cadastrando = !this.props.id

        if (cadastrando) {
            const dados = {
                id: `987535a5-8cfa-412b-8672-1e466617450${Math.random(100)}`,
                titulo: form.titulo.value,
                texto: form.texto.value
            }

            this.props.cadastraPostit(dados)

            form.reset()

        } else {
            const dados = {
                id: this.props.id,
                titulo: form.titulo.value,
                texto: form.texto.value
            }

            this.props.alteraPostit(dados)

            this.setState({editando: false})
        }
    }

    habilitaEdicao = () => {
        this.setState({ editando: true })
    }

    render() {
        const cadastrando = !this.props.id
        return (
            <form className="postit" onSubmit={this.cadastraOuAlteraPostit} onClick={this.habilitaEdicao}>
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
                {(cadastrando || this.state.editando) && (
                    <input
                        className="postit__botao-concluir"
                        type="submit"
                        value="Concluído"
                    />
                )}

            </form>
        )
    }
}

export default connect(
    null,
    { cadastraPostit, alteraPostit }
)(Postit);