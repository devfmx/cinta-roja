import React, { Component } from 'react';
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom';
import Login from './component/Login';
import Home from './component/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <Route exact path="/" component={Home}/>
          <Route exact path="/login" component={Login}/>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
