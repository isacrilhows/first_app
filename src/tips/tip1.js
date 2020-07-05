//  Atribuição de html dentro de variaveis

import React, { Component } from 'react';

class MeuComponente extends Component {
    render() {
        let f = <a href = "http://google.com.br"> Google </a>;

        return ( 
            <div>
                <div>O link da {f}</div>
                <div>Outro link da {f}</div>
            </div>
        );
    }
}

export default MeuComponente;