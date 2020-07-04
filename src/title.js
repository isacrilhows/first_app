//Ativação de um evento para o mesmo efetuar uma renderização e mudança do state do nosso titulo

import React, {Component} from 'react';

class Titulo extends Component {
    constructor(props){
        super(props);
        this.state = {texto: "Clique aqui"};
        this.funcao = this.funcao.bind(this);
    }

    funcao(){
        this.setState({texto: "Você clicou no titulo"});
    }

    render(){
        return(
        <h1 onClick={this.funcao}>{this.state.texto}</h1>
        )
    }
}

export default Titulo;