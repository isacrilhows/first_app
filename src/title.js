//Padrão de importação elementos com a sincronização de servidores

import React, {Component} from 'react';

class Titulo extends Component {
    constructor(props){
        super(props);
        this.elementoH1 = React.createRef();
        this.state = {
            texto: "Meu Texto Padrão"
        }
    }

    render(){
        return(
        <h1>{this.state.texto}</h1>
        )
    }
}

export default Titulo;