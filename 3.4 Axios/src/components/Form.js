import React,{Component} from 'react';
import axios from 'axios';

class Form extends Component{

    constructor(props){
        super(props);
        this.state = {
            name:"",
            last_name:"",
            biography:"",
            gender:"F",
            nacionalidad:"MX",
            age:0,   
        }
    }

    onInputChange = (e) =>{
        const {id,value} = e.target;
        this.setState({
            [id]:value
        })
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        axios.post('https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/',this.state)
            .then(author => alert('Author create <3'))
            .catch(err => alert(err))
    }

    render(){
        return(
            <form className="p-5" onSubmit={this.onSubmitForm}>
                <div className="form-group">
                    <label for="formGroupExampleInput">Nombre</label>
                    <input type="text" className="form-control" id="name"
                        onChange={this.onInputChange}
                        value={this.state.name}
                    />
                </div>
                <div className="form-group">
                    <label for="formGroupExampleInput2">Apellidos</label>
                    <input type="text" class="form-control" id="last_name"
                    onChange={this.onInputChange}
                    value={this.state.last_name}
                    />
                </div>
                <div className="form-group">
                    <label for="formGroupExampleInput2">Biografia</label>
                    <input type="text" className="form-control" id="biography"
                    onChange={this.onInputChange}
                    value={this.state.biography}
                    />
                </div>
                <div className="form-group">
                    <label for="formGroupExampleInput2">Genero</label>
                <select className="form-control" id="gender" onChange={this.onInputChange} value={this.state.gender}>
                    <option>F</option>
                    <option>M</option>
                </select>
                </div>
                <div className="form-group">
                    <label for="formGroupExampleInput2">Edad</label>
                    <input type="number" className="form-control" id="age"
                    onChange={this.onInputChange}
                    value={this.state.age}
                    />
                </div>

                <button className="btn btn-success" type="submit">Guardar</button>
            </form>
        )
    }
}

export default Form;