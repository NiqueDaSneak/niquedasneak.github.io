import React, { Component } from 'react'

import Btn from './Btn'
import githubIcon from '../assets/imgs/github.svg'
import cvIcon from '../assets/imgs/cv.svg'
import instaIcon from '../assets/imgs/insta.svg'
import linkedinIcon from '../assets/imgs/linkedin.svg'



var btnData = [
  {
    title: 'Instagram',
    link: 'google.com',
    img: instaIcon
  },
  {
    title: 'LinkedIn',
    link: 'google.com',
    img: linkedinIcon
  },
  {
    title: 'Resume',
    link: 'google.com',
    img: cvIcon
  },
  {
    title: 'GitHub',
    link: 'google.com',
    img: githubIcon
  }
]

class ExternalLinks extends Component {
  render() {
    var namesList = btnData.map((btn) => (
      <Btn img={btn.img} link={btn.link} title={btn.title}/>
    ))

    var styles = {
        display: 'flex',
        justifyContent: 'space-between',
        display: 'flex',
        position: 'absolute',
        bottom: '30px',
        width: '80%',
        marginLeft: '10vw'
      }

      return <div style={styles}>{ namesList }</div>
  }
}

export default ExternalLinks
