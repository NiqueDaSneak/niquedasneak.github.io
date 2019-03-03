import React from 'react'
import Btn from './Btn'

import ucIcon from '../assets/imgs/uc.svg'
import fiveThreeIcon from '../assets/imgs/53.svg'
import rightArrowIcon from '../assets/imgs/right-arrow.svg'
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
      btns = [<Btn bgColor='white' title='UC' img={ucIcon} link='' />, <Btn bgColor='#1E3D97' title='5/3' img={fiveThreeIcon} link='' />, <Btn bgColor='#57008E' title='Bridge' img={rightArrowIcon} link='' />]
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
