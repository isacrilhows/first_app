//Inclusão de funcionalidades de importação do estilo: Ref

import React, {Component} from 'react';

class Titulo extends Component {
    constructor(props){
        super(props);
        this.elementoH1 = React.createRef();
    }
    componentDidMount(){
        this.elementoH1.current.innerHTML = "Outro Texto";
    }

    render(){
        return(
            <h1 ref={this.elementoH1}>Texto de exemplo</h1>
        )
    }
}

export default Titulo;