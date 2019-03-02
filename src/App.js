import React, { Component } from 'react';
import './assets/sass/App.sass';

import LandingScreen from './components/LandingScreen'
import MainContent from './components/MainContent'
import ActionButton from './components/ActionButton'
import TLDR from './components/TLDR'

class App extends Component {
  state = {
    actionButtonHidden: true,
    tldrHidden: true
  }

  toggleActionButton = () => {
    this.setState({ actionButtonHidden: !this.state.actionButtonHidden })
  }

  toggleTLDR = () => {
    this.setState({ tldrHidden: !this.state.tldrHidden})
  }

  render() {
    return (
      <div className="App">
        <LandingScreen />
        <MainContent toggleActionButton={ () => this.toggleActionButton() } />
        <ActionButton toggleTLDR={ () => this.toggleTLDR() } hidden={ this.state.actionButtonHidden } />
        <TLDR toggleTLDR={ () => this.toggleTLDR() } hidden={ this.state.tldrHidden } />
    </div>
    );
  }
}

export default App;
