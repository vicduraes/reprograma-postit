import React from "react";
import "./Campo.css";

class Campo extends React.Component {

  constructor(props) {
    super(props)
    this.state = { erro: '' }
  }

  valida = (evento) => {
    const input = evento.target // document.querySelector(#)
    if (this.props.required && input.value.trim() === '') {
      this.setState({ erro: "Campo obrigatório" })
    } else if (this.props.minLength && input.value.length < this.props.minLength) {
      this.setState({ erro: `Digite pelo menos ${this.props.minLength} caracteres` })
    } else if (this.props.pattern && !this.props.pattern.test(input.value)){
      this.setState({ erro: "E-mail inválido" })
    }else {
      this.setState({ erro: '' })
    }
  }

  render() {
    return (
      <div>
        <input
          id={this.props.id}
          className="caixa-texto"
          type={this.props.type}
          name={this.props.name}
          placeholder={this.props.placeholder}
          onChange={this.valida}
        />
        <p className="grupo__erro">{this.state.erro}</p>
      </div>
    )
  }

}

export default Campo;

// 1) O componente pode mudar de estado? Sim // classe
// 2) O que muda? state = {erro: ''} ou {erro: 'campo obrigatório'} // constructor
// 3) Qual o estado inicial? state = {erro: ''} // constructor

