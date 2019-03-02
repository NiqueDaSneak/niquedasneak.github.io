import React from 'react'
import Btn from './Btn'

import githubIcon from '../assets/imgs/github.svg'
import '../assets/sass/popout.sass'

const popout = ( props ) => {
  var btns

  switch (props.actionable) {
    case 'SHOWEXAMPLES':
      btns = [<Btn title='See What I Mean' link='google.com' img={githubIcon}/>]
      break
    case 'LINKTOGITHUB':
      btns = [<Btn title='GitHub' link='google.com' img={githubIcon}/>]
      break
    case'LINKTOEXAMPLES':
      btns = [<Btn title='U of Cincy' link='google.com' img={githubIcon}/>,<Btn title='5/3' link='google.com' img={githubIcon}/>,<Btn title='Bridgeable' link='google.com' img={githubIcon}/>]
      break
  }
  return (
    <div className='popoutContainer'>
      <span className='popoutHeading'>{ props.copy }</span>
      <div className='btnsContainer'>{ btns }</div>
    </div>
  )
}

export default popout
