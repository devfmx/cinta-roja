import React,{Component} from 'react';

class Despedida extends Component{

    constructor(props){
        super(props);
        // console.log('Props componente despedida: ', props);
    }

    renderSubtittle(){
        //...logica
        return <h3>El subtitulo desde una función</h3>
    }

    render(){
        return (
            <div className="Despedida">
                <h2>{this.props.mensaje} desde el componente Despedida</h2>
                {this.renderSubtittle()}
            </div>
        )
    }
}

export default Despedida;