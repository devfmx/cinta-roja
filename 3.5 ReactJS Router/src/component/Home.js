import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Home extends Component{
    render(){
        return (
            <div className="Home">
                <h1>El Home</h1>
                <Link to="/login">
                    <button>Deslogearte carnal</button>
                </Link>
            </div>
        )
    }
}

export default Home;