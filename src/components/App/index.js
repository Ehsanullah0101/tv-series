import React, { Component } from 'react';
import Main from '../Main'
import {Link} from 'react-router-dom'

import './App.css';
import 'whatwg-fetch';


class App extends Component {

  render(){
    return (
      <div className="App">
        <header className="App-header">
          
          <h3>TV Series List</h3>
          
        </header>
        <Link to=''>
        Home
       </Link>
       <Main />
      </div>
    );
  }
  
}

export default App;
