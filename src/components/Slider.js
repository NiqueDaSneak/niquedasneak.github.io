import React, { Component } from 'react'
import FAQ from './FAQ'

import '../assets/sass/slider.sass'
import reactImg from '../assets/imgs/react.svg'
import codeImg from '../assets/imgs/code.svg'
import cubeImg from '../assets/imgs/cube.svg'
import Popout from './Popout'

class Slider extends Component {
  state = {
    content: [
      {
        actionable: 'SHOWEXAMPLES',
        heading: 'Rapid Prototyping & Ideation',
        img: cubeImg,
        copy: 'All projects have people they are supposed to serve. I quickly translate business requeriments into experince that satisfy users on all their devices.'
      },
      {
        actionable: 'LINKTOGITHUB',
        heading: 'JavaScript Utilization',
        img: reactImg,
        copy: 'I love JavaScript...a lot! I can use it in lots of ways, but React/React Native are my frameworks of choice.'
      },
      {
        actionable: 'LINKTOEXAMPLES',
        heading: 'Execution & Delivery',
        img: codeImg,
        copy: "I've worked on some pretty interesting projects..."
      }
    ],
    popoutHidden: true,
    popoutData: null
  }

  openPopout = (clickedFAQ) => {
    this.props.toggleActionButton()
    this.setState({ popoutHidden: false, popoutData: clickedFAQ })
  }

  closePopout = () => {
    this.props.toggleActionButton()
    this.setState({ popoutHidden: true, popoutData: null })
  }

  render() {
    const FAQs = this.state.content.map((item, index) => {
      return <FAQ key={index} popoutDataBinding={this.state.popoutData} actionable={item.actionable} img={item.img} heading={item.heading} copy={item.copy} openPopout={(clickedFAQ) => this.openPopout(clickedFAQ)}/>
    })
    return(
      <div className='sliderContainer'>
        <div className='gradHolder'>
          {FAQs}
        </div>
        <div className={ this.state.popoutHidden ? 'popout hidden' : 'popout' }>
          <Popout actionable={ this.state.popoutData === null ? '' : this.state.popoutData.actionable } heading={ this.state.popoutData === null ? '' : this.state.popoutData.heading } copy={ this.state.popoutData === null ? '' : this.state.popoutData.copy }/>
          <div onClick={this.closePopout} className={this.state.popoutHidden ? 'overlay hidden' : 'overlay'}></div>
      </div>
      </div>
    )
  }
}

export default Slider
