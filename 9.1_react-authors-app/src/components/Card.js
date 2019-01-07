import React,{Component} from 'react';
import './card.css'

class Card extends Component{

    render(){
        return(
            <div className="card Card mt-5 mr-3">
                <img className="card-img-top image" src="https://estaticos.elperiodico.com/resources/jpg/1/6/1502194230861.jpg" alt="Card image cap"/>
                <div className="card-body image">
                    <h5 className="card-title">{this.props.nombre}</h5>
                    <p className="card-text subtitle">{this.props.bio}</p>
                </div>
                </div>
        )
    }
}

export default Card;