/*
----------------------------------------------------------------
                    React: Ejercicio 1
    Escribe un componente que muestre sus props y estado
    en consola.
    Además, usa los métodos del ciclo de vida de React
    y muestra mediante console log cuándo ocurren éstos. 
----------------------------------------------------------------
*/

import React, { Component } from 'react';

class Ejercicio1 extends Component {
    state = { 
        ejemplo: 'ejemplo'
     }

    componentDidMount(){
        console.log('El componente se ha montado');
    }

    componentWillUnmount(){
        console.log('El componente se desmontará');
    }

    mostrarProps(){
        console.log(this.props);
    }

    mostrarState(){
        console.log(this.state);
    }

    render() { 
        return (
            <React.Fragment>
            <h1>Ejercicio 1</h1>
            { this.mostrarProps()}
            { this.mostrarState()}
            </React.Fragment>

        );
    }
}
 
export default Ejercicio1;

