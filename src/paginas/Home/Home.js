import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Postit from "../../componentes/Postit/Postit";
import carregando from "./carregando.svg";
import "./Home.css";

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = { carregando: false }
    }

    render() {
        const cadastrando = !this.props.id
    
        if (!this.props.usuaio) {
            return <Redirect to="/login" />
        }
        return (
            <main className="home">
                {this.state.carregando ? (
                    <img className="home__loading" src={carregando} alt="Carregando" />
                ) : (
                        <div>
                            <Postit />
                            <div>
                                {this.props.postits.map(item => (
                                    <Postit
                                        key={item.id}
                                        id={item.id}
                                        titulo={item.titulo}
                                        texto={item.texto}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
            </main>
        )
    }
}

// const state ={
//     usuario: {"email: email@email.com"}
// }

export default connect(
    (state) => ({
        usuaio: state.usuario,
        postits: state.postits
    })
)(Home);