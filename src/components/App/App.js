import React, { Component } from 'react';

import './App.css';
import 'whatwg-fetch';

import Main from '../Main/index';

class App extends Component {

 
  render() {
    return (
      <div className="App">
        <header className="App-header">
           <h1 className="App-title">Tv Series</h1>
        </header>
      
       
       <Main/>
      </div>
    );
  }
}

export default App;
