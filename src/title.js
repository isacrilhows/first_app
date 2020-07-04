//Declarando e importando componentes através de classes (Props)

import React, {Component} from 'react';

class Titulo extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <h1>{this.props.texto}</h1>
        )
    }
}

export default Titulo;