import React, { Component } from 'react'
import { Waypoint } from 'react-waypoint'

import '../assets/sass/maincontent.sass'
import Slider from './Slider'

class MainContent extends Component {
  state = {
    showingTitle: false
  }

  showTitle = () => {
    this.setState({ showingTitle: true})
  }

  render() {
    return(
      <div className='container'>
        <Waypoint
          onEnter={this.showTitle}>
          <span className={ this.state.showingTitle ? 'mainContentTitle' : 'mainContentTitle hidden' }>I'm a Front-End Developer Specializing in...</span>
        </Waypoint>
        <Waypoint
          onEnter={ this.props.toggleActionButton }
          onLeave={ this.props.toggleActionButton }>
          <div>
            <Slider toggleActionButton={ this.props.toggleActionButton }/>
          </div>
        </Waypoint>
      </div>
    )
  }
}

export default MainContent
