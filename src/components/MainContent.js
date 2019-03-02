import React, { Component } from 'react'
import { Waypoint } from 'react-waypoint'

import '../assets/sass/maincontent.sass'
import Slider from './Slider'

const MainContent = ( props ) => (
    <div className='container'>
      <span className='title'>I'm a Front-End Developer Specializing in...</span>
      <Waypoint
        onEnter={ props.toggleActionButton }
        onLeave={ props.toggleActionButton }>
          <div>
            <Slider toggleActionButton={ props.toggleActionButton }/>
          </div>
      </Waypoint>
    </div>
)

export default MainContent
