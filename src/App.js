import React from 'react';
import logo from './logo.svg';
import './App.css';
// import x from './variaveis.js'; - Código para uma unica variavel
import {x,y} from './variaveis.js'; // Importão para diversas variaveis
import Titulo from './title.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Titulo texto="Texto através do atributo"></Titulo>
        <p>
            Esse é meu novo texto. { x } <br/> { y }
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
