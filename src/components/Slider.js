import React, { Component } from 'react'

import '../assets/sass/slider.sass'
import reactImg from '../assets/imgs/react.svg'
import codeImg from '../assets/imgs/code.svg'
import cubeImg from '../assets/imgs/cube.svg'

class Slider extends Component {
  state = {
    whichModule: 0,
    content: [
      {
        heading: 'Rapid Prototyping & Ideation',
        img: cubeImg,
        copy: 'All projects have people they are supposed to serve. I quickly translate business requeriments into experince that satisfy users on all their devices; in 2019. Make Options Great Again.'
      },
      {
        heading: 'JavaScript Utilization',
        img: reactImg,
        copy: 'I love JavaScript...a lot! I can use it in lots of ways, but React/React Native are my frameworks of choice.'
      },
      {
        heading: 'Execution & Delivery',
        img: codeImg,
        copy: "I've worked on some pretty interesting projects..."
      }
    ]
  }

  render() {
    return(
      <div className='slider'>
        <div className='indicators'>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <hr className='hr' />
        <div>
          <span className='heading'>{this.state.content[this.state.whichModule].heading}</span>
          <img className='slideImg' src={this.state.content[this.state.whichModule].img}/>
          <span className='slideText'>{this.state.content[this.state.whichModule].copy}</span>

        </div>
        <hr className='hr' />
      </div>
    )
  }
}

export default Slider
