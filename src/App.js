import React, { Component } from 'react';
import './assets/sass/App.sass';

import LandingScreen from './components/LandingScreen'
import MainContent from './components/MainContent'
import ActionButton from './components/ActionButton'

class App extends Component {
  state = {
    actionButtonHidden: true
  }

  toggleActionButton = () => {
    this.setState({ actionButtonHidden: !this.state.actionButtonHidden })
  }

  render() {
    return (
      <div className="App">
        <LandingScreen />
        <MainContent toggleActionButton={() => this.toggleActionButton()} />
        <ActionButton hidden={this.state.actionButtonHidden} />
      </div>
    );
  }
}

export default App;
