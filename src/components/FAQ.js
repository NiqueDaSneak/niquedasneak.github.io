import React, { Component } from 'react'
import Ink from 'react-ink'

import downChevronImg from '../assets/imgs/down-chevron.svg'
import '../assets/sass/faq.sass'

class FAQ extends Component {
  state = {
    chevronUp: false
  }

  toggleUp = () => {
    this.setState({chevronUp: !this.state.chevronUp})

    var clickedFAQ = {
      heading: this.props.heading,
      copy:this.props.copy
    }
    this.props.openPopout(clickedFAQ)
  }

  render() {
    return(
      <div className='faqRow' onClick={this.toggleUp}>
        <img src={this.props.img}/>
        <span>{this.props.heading}</span>
        <img className={this.state.chevronUp ? 'up' : null} src={downChevronImg}/>
        <Ink duration={800} />

      </div>
    )
  }
}

export default FAQ
