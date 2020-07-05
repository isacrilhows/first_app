//  Função map associada a vetores juntamente com arrow function afim de criar uma lista com 5 valores declarados dentro da variavel

import React, { Component } from 'react';

class MeuComponente extends Component {
    constructor(props){
        super (props);
    }


    render() {
        let v = [1,2,3,4,5];

        let h = v.map ((valor,indice) => {
        return <li key={indice}>{valor}</li>
        });
        
        return (
         <div>
             <div><ul>{h}</ul></div>
         </div>   
        );
    }
}

export default MeuComponente;