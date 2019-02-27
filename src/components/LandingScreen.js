import React from 'react'

import '../assets/sass/landingScreen.sass'
import AnimatedLogo from './AnimatedLogo'
import ExternalLinks from './ExternalLinks'

const LandingScreen = () => (
  <div className='landingScreen'>
  <AnimatedLogo />
  <header>
    <span className='headerName'>Dominique Clemmer</span>
    <span className='headerTitle'>Front End Developer</span>
  </header>
  <ExternalLinks />
  </div>
)

export default LandingScreen
