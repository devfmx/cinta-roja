/*
----------------------------------------------------------------
                    React: Ejercicio 2
    Implementa un componente que reciba una lista de frutas
    mediante props y las despliegue en pantalla
----------------------------------------------------------------
*/

import React, { Component } from 'react';

class Ejercicio2 extends Component {

    constructor(props){
        super(props);
        this.state = {
            frutas: this.props.frutas
        }
    }

    renderFrutas( frutas ){
        return frutas.map( fruta => {
            return <li key={fruta}>{fruta}</li>
        }); 
    }

    render() { 
        return (
            <React.Fragment>
                <h1>Ejercicio 2</h1>
                {this.renderFrutas(this.state.frutas)  }
            </React.Fragment> 
        );
    }
}
 
export default Ejercicio2;

