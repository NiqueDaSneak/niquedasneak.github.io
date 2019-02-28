import React, { Component } from 'react';
import './assets/sass/App.sass';

import LandingScreen from './components/LandingScreen'
import MainContent from './components/MainContent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <LandingScreen />
        <MainContent />
      </div>
    );
  }
}

export default App;
