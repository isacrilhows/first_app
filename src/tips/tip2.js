// Funções retornando parametros html

import React, { Component } from 'react';

class MeuComponente extends Component {
    constructor(props) {
        super(props);
    }
    criaLink(nome, url) {
        return <a href = { url } > { nome } </a>;
    }
    
    render(){
        return (
        <div>
            <div>{this.criaLink("Google", "http://google.com.br")}</div>
            <div>{this.criaLink("Github", "https://github.com/")}</div>
        </div>
        );
    }
}

export default MeuComponente;