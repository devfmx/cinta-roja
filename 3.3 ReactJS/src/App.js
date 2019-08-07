import React, { Component } from 'react';
import './App.css';
import Saludo from './Saludo';
import Despedida from './Despedida';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hola desde el componente App</h1>
        <Saludo/>
        <Despedida mensaje="Bye" color="negro"/>
      </div>
    );
  }
}

export default App;
