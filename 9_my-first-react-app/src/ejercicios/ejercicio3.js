/*
----------------------------------------------------------------
                    React: Ejercicio 3
    Crea un componente que tenga un text input que muestre
    debajo, con un contador, cuántas letras contiene el input.
    Si el input contiene 0 letras, el contador debe mostrar 
    'cero'. Si el input contiene una o más letras, el contador
    debe mostrar el número del conteo.
----------------------------------------------------------------
*/

import React, { Component } from 'react';

class Ejercicio3 extends Component {
    constructor(props){
        super(props)
        this.state = {
            input: ''
        }
    }

    onInputChange = (e) => {
        this.setState({
            input: e.target.value
        })
        console.log(this.state)
    }

    renderCounter = () => {
        let count = this.state.input.length;
        if (count === 0){
            return 'cero'
        } else return (count)
    }

    render() { 
        return ( 
            <React.Fragment>
                <h1>Ejercicio 3</h1>
                <input type='text' onChange={this.onInputChange}></input>
                <br/>
                <span>{this.renderCounter()}</span>
            </React.Fragment>
        );
    }
}
 
export default Ejercicio3;