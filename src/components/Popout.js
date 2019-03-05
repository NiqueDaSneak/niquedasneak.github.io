import React from 'react'
import Btn from './Btn'

import ucIcon from '../assets/imgs/uc.svg'
import fiveThreeIcon from '../assets/imgs/53.svg'
import rightArrowIcon from '../assets/imgs/right-arrow.svg'
import githubIcon from '../assets/imgs/github.svg'
import reactImg from '../assets/imgs/react.svg'
import whiteCodeImg from '../assets/imgs/white-code.svg'
import whiteCubeImg from '../assets/imgs/white-cube.svg'

import '../assets/sass/popout.sass'

const popout = ( props ) => {
  var btns
  var correspondingImg

  switch (props.actionable) {
    case 'SHOWEXAMPLES':
      btns = [<Btn title='See What I Mean' link='https://drive.google.com/open?id=1CjQXieDUk-OEE7O7l9ofcWf2Ijvr1klU' img={rightArrowIcon}/>]
      correspondingImg = <img alt='See What I Mean Icon' className='popoutHeadImg' style={{width: '36vw'}} src={whiteCubeImg}/>
      break
    case 'LINKTOGITHUB':
      btns = [<Btn title='GitHub' link='https://www.github.com/niquedasneak' img={githubIcon}/>]
      correspondingImg = <img alt='GitHub Logo' className='popoutHeadImg' style={{width: '36vw'}} src={reactImg}/>
      break
    case'LINKTOEXAMPLES':
      btns = [<Btn bgColor='white' title='UC' img={ucIcon} link='https://www.uc.edu' />, <Btn bgColor='#1E3D97' title='5/3' img={fiveThreeIcon} link='https://www.53.com' />, <Btn bgColor='#57008E' title='Bridge' img={rightArrowIcon} link='' />]
      correspondingImg = <img alt='Examples Icon' className='popoutHeadImg' style={{width: '36vw'}} src={whiteCodeImg}/>
      break
    default:
      break
  }
  return (
    <div className='popoutContainer'>
      {correspondingImg}
      <hr style={{ border: '1px solid white', width: '100%' }}/>
      <span className='popoutHeading'>{ props.copy }</span>
      <div className='popoutbtnsContainer'>{ btns }</div>
    </div>
  )
}

export default popout
