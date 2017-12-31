import React, { Component } from 'react';
import './App.css';
import Title from './title'
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import Currencies from './currencies'

class App extends Component {
  render() {
    return (
      <div>
        <Title />
        <Currencies />
      </div>
    );
  }
}

export default App;
