import React from 'react'

import Btn from './Btn'
import githubIcon from '../assets/imgs/github.svg'
import cvIcon from '../assets/imgs/cv.svg'
import ucIcon from '../assets/imgs/uc.svg'
import fiveThreeIcon from '../assets/imgs/53.svg'
import rightArrowIcon from '../assets/imgs/right-arrow.svg'


import '../assets/sass/tldr.sass'

const TLDR = ( props ) => (
  <div>
    <section className={ props.hidden ? 'drawer hidden' : 'drawer'}>

      <div className='slideHeader'>
        <span>TL;DR</span>
      </div>
      <section>
        <span className='sectionHeader'>Quick Links</span>
        <div className='slidebtnContainer first'>
          <Btn bgColor='#707A23' title='GitHub' img={githubIcon} link='https://www.github.com/niquedasneak' />
          <Btn bgColor='#707A23' title='Resume' img={cvIcon} link='https://www.resume.creddle.io/resume/9ayo421e0q2' />
        </div>
      </section>
      <section>
        <span className='sectionHeader'>Quick Facts</span>
        <ul style={ {margin: 0, color: 'white', textAlign: 'left', width: '50vw'} }>
          <li>I design & I code</li>
          <li>JavaScript/React/React Native are my jam</li>
        </ul>
      </section>
      <section>
        <span className='sectionHeader'>Quick Portfolio</span>
        <div className='slidebtnContainer last'>
          <Btn bgColor='white' title='UC' img={ucIcon} link='https://www.uc.edu' />
          <Btn bgColor='#1E3D97' title='5/3' img={fiveThreeIcon} link='https://www.53.com' />
          <Btn bgColor='#57008E' title='Bridge' img={rightArrowIcon} link='https://www.bridgeable.org' />
        </div>
      </section>
    </section>
    <section onClick={ props.toggleTLDR } className={ props.hidden ? 'slideOverlay hidden' : 'slideOverlay'}>
    </section>
  </div>
)

export default TLDR
