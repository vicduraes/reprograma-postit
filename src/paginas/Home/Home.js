import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import "./Home.css";

function Home(props) {
    if (!props.usuaio) {
        return <Redirect to="/login" />
    }
    return (
        <main className="home">

        </main>
    )
}

// const state ={
//     usuario: {"email: email@email.com"}
// }

export default connect(
    (state) => ({ usuaio: state.usuario })
)(Home);