import React, { Component } from 'react'
import Btn from './Btn'
import githubIcon from '../assets/imgs/github.svg'
import cvIcon from '../assets/imgs/cv.svg'
import instaIcon from '../assets/imgs/insta.svg'
import linkedinIcon from '../assets/imgs/linkedin.svg'
import '../assets/sass/externallinks.sass'
var btnData = [
  {
    title: 'Instagram',
    link: 'https://www.instagram.com/niquedasneak',
    img: instaIcon
  },
  {
    title: 'LinkedIn',
    link: 'https://www.linkedin.com/in/thisisdom',
    img: linkedinIcon
  },
  {
    title: 'Resume',
    link: 'https://www.resume.creddle.io/resume/9ayo421e0q2',
    img: cvIcon
  },
  {
    title: 'GitHub',
    link: 'https://www.github.com/niquedasneak',
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
        bottom: '70px',
        width: '80%',
        marginLeft: '10vw',
      }

      return <div className='btnHolderExternalLinks' style={styles}>{ namesList }</div>
  }
}

export default ExternalLinks
