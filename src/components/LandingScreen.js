import React,{ Component }  from 'react'

import '../assets/sass/landingScreen.sass'
import AnimatedLogo from './AnimatedLogo'
import ExternalLinks from './ExternalLinks'
import downChevronImg from '../assets/imgs/down-chevron.svg'

class LandingScreen extends Component {
  state = {
    statements: [
      'String 1',
      'This is String 2',
      'Hello from String 3'
    ],
    dynamicInput: ''
  }

  componentDidMount() {
    // this is where my logic goes for the type out functionlaity
  }

  render() {
    return(
      <div className='landingScreen'>
        <AnimatedLogo />
        <header>
          <span className='headerName'>Dominique Clemmer</span>
          <span className='headerTitle'>{ this.state.dynamicInput }</span>
        </header>
        <ExternalLinks />
        <img className='downChevronImg' src={downChevronImg } />
      </div>
    )
  }
}

export default LandingScreen
