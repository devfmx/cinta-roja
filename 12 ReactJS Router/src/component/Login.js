import React, {Component} from 'react';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            user:"",
            pass:""
        }
    }

    onChangeInput = (e) =>{
        const {id,value} = e.target;
        this.setState({
            [id]:value
        })
    }

    onSubmitBtn = (e) => {
        e.preventDefault();
        console.log(this.state);
        if(this.state.user === 'juanito' && this.state.pass === 'pass'){
            this.props.history.push('/')
        }else{
            alert('Datos incorrectos')
        }
    }
    render(){
        return (
            <form className="Login" onSubmit={this.onSubmitBtn}>
                <h1>El login :D</h1>
                <input id="user" type="text" 
                placeholder="Pon el user"
                onChange={this.onChangeInput}
                value={this.state.user}/>

                <input id="pass" type="password" 
                placeholder="Pon el password"
                onChange={this.onChangeInput}
                value={this.state.pass}/>
                
                <button type="submit">Login</button>
            </form>
        )
    }
}

export default Login;