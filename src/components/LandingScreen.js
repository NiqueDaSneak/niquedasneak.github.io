import React from 'react'
import Typist from 'react-typist'

import '../assets/sass/landingScreen.sass'
import AnimatedLogo from './AnimatedLogo'
import ExternalLinks from './ExternalLinks'

const LandingScreen = () => (
  <div className='landingScreen'>
    <AnimatedLogo />
    <header>
      <span className='headerName'>Dominique Clemmer</span>
      <Typist>
        <span className='headerTitle'>Front-End Developer</span>
        <Typist.Backspace count={19} delay={750}/>
        <span className='headerTitle'>Futurist</span>
        <Typist.Backspace count={8} delay={750}/>
        <span className='headerTitle'>Empath</span>
        <Typist.Backspace count={6} delay={750}/>
        <span className='headerTitle'>Technologist</span>
        <Typist.Backspace count={12} delay={750}/>
        <span className='headerTitle'>Traveler</span>
        <Typist.Backspace count={8} delay={750}/>
        <span className='headerTitle'>Human Being</span>
    </Typist>
    </header>
    <ExternalLinks />
  </div>
)


export default LandingScreen
