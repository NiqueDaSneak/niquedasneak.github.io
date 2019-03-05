import React, { Component } from 'react';
import './assets/sass/App.sass';
import phoneIcon from './assets/imgs/phone-call.svg'
import envelopeIcon from './assets/imgs/envelope.svg'

import LandingScreen from './components/LandingScreen'
import MainContent from './components/MainContent'
import ActionButton from './components/ActionButton'
import TLDR from './components/TLDR'
import FooterAnimatedLogo from './components/FooterAnimatedLogo'
import Btn from './components/Btn'

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
        <footer>
          <FooterAnimatedLogo />
          <Btn style={ {marginRight: '14vw'} } bgColor='' img={phoneIcon} link='penis.com' title=''/>
          <Btn bgColor='' img={envelopeIcon} link='penis.com' title=''/>
        </footer>
        <ActionButton toggleTLDR={ () => this.toggleTLDR() } hidden={ this.state.actionButtonHidden } />
        <TLDR toggleTLDR={ () => this.toggleTLDR() } hidden={ this.state.tldrHidden } />
    </div>
    );
  }
}

export default App;
