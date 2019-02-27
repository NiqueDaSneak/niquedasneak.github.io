import React from 'react'

import shipLogo from '../assets/imgs/ship-logo.png'
import shipLogoGold from '../assets/imgs/ship-logo-gold.png'

import '../assets/sass/logo.sass'

const AnimatedLogo = () => (
  <div className='logoContainer'>
    <img className='ship1'src={shipLogoGold} />
    <img className='ship2'src={shipLogo} />
    <img className='ship3'src={shipLogo} />
    <img className='ship4'src={shipLogo} />
  </div>
)

export default AnimatedLogo
