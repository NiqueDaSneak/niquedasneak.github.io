import React from 'react'

import Btn from './Btn'
import githubIcon from '../assets/imgs/github.svg'
import cvIcon from '../assets/imgs/cv.svg'
import '../assets/sass/tldr.sass'

const TLDR = ( props ) => (
  <div>
    <section className={ props.hidden ? 'drawer hidden' : 'drawer'}>

      <div className='slideHeader'>
        <span>TL;DR</span>
      </div>
      <section>
        <p>Section Header</p>
        <div className='btnContainer'>
          <Btn title='' img={githubIcon} link='GitHub' />
          <Btn title='' img={cvIcon} link='Resume' />
        </div>
      </section>
      <section>
        <p>Section Header</p>
      </section>
      <section>
        <p>Section Header</p>
        <div className='btnContainer'>
          <Btn title='' img={githubIcon} link='' />
          <Btn title='' img={cvIcon} link='' />
          <Btn title='' img={githubIcon} link='' />
        </div>
      </section>
    </section>
    <section onClick={ props.toggleTLDR } className={ props.hidden ? 'slideOverlay hidden' : 'slideOverlay'}>
    </section>
  </div>
)

export default TLDR
