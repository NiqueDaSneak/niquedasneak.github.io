import React, { Component } from 'react';
import './assets/sass/App.sass';

import LandingScreen from './components/LandingScreen'

class App extends Component {
  render() {
    return (
      <div className="App">
        <LandingScreen />
      </div>
    );
  }
}

export default App;
