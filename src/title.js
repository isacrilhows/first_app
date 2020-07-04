//Ativação de Eventos através do click

import React, {Component} from 'react';

class Titulo extends Component {
    constructor(props){
        super(props);
    }

    funcao(){
        alert("Você ativou o evento do botão");
    }

    render(){
        return(
        <h1 onClick={this.funcao}>Clique aqui!</h1>
        )
    }
}

export default Titulo;