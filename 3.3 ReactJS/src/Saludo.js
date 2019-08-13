import React,{Component} from 'react';

class Saludo extends Component{

    constructor(props){
        super(props);
        this.state = {
            mensajin:'Hola desde el estado del compoenente Saludo',
        }
    }

    componentDidMount(){
        console.log('En did mount');
        setTimeout(()=>{
            this.setState({
                mensajin:'Hola, ya pasaron 3 segundos :v'
            })
        },3000);

    }

    componentWillMount(){
        console.log('En will mount');
    }


    render(){
        console.log('En render');
        return (
            <div className="Saludo">
                <h2>{this.state.mensajin}</h2>
            </div>
        )
    }
}

export default Saludo;