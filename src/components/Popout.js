import React from 'react'
import Btn from './Btn'

import ucIcon from '../assets/imgs/uc.svg'
import fiveThreeIcon from '../assets/imgs/53.svg'
import rightArrowIcon from '../assets/imgs/right-arrow.svg'
import githubIcon from '../assets/imgs/github.svg'
import reactImg from '../assets/imgs/react.svg'
import codeImg from '../assets/imgs/code.svg'
import cubeImg from '../assets/imgs/cube.svg'

import '../assets/sass/popout.sass'

const popout = ( props ) => {
  var btns
  var correspondingImg

  switch (props.actionable) {
    case 'SHOWEXAMPLES':
      btns = [<Btn title='See What I Mean' link='google.com' img={rightArrowIcon}/>]
      correspondingImg = <img src={reactImg}/>
      break
    case 'LINKTOGITHUB':
      btns = [<Btn title='GitHub' link='https://www.github.com/niquedasneak' img={githubIcon}/>]
      correspondingImg = <img src={codeImg}/>
      break
    case'LINKTOEXAMPLES':
      btns = [<Btn bgColor='white' title='UC' img={ucIcon} link='' />, <Btn bgColor='#1E3D97' title='5/3' img={fiveThreeIcon} link='' />, <Btn bgColor='#57008E' title='Bridge' img={rightArrowIcon} link='' />]
      correspondingImg = <img src={cubeImg}/>
      break
  }
  return (
    <div className='popoutContainer'>
      {correspondingImg}
      <span className='popoutHeading'>{ props.copy }</span>
      <div className='popoutbtnsContainer'>{ btns }</div>
    </div>
  )
}

export default popout
