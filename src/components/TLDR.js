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
        <span className='sectionHeader'>Section Header</span>
        <div className='slidebtnContainer first'>
          <Btn title='GitHub' img={githubIcon} link='GitHub' />
          <Btn title='GitHub' img={cvIcon} link='Resume' />
        </div>
      </section>
      <section>
        <span className='sectionHeader'>Section Header</span>
        <ul style={ {margin: 0} }>
          <li>Lorem Ipsume dolor emit tisla</li>
          <li>Lorem Ipsume dolor emit tisla</li>
          <li>Lorem Ipsume dolor emit tisla</li>
          <li>Lorem Ipsume dolor emit tisla</li>
        </ul>
      </section>
      <section>
        <span className='sectionHeader'>Section Header</span>
        <div className='slidebtnContainer last'>
          <Btn title='GitHub' img={githubIcon} link='' />
          <Btn title='GitHub' img={cvIcon} link='' />
          <Btn title='GitHub' img={githubIcon} link='' />
        </div>
      </section>
    </section>
    <section onClick={ props.toggleTLDR } className={ props.hidden ? 'slideOverlay hidden' : 'slideOverlay'}>
    </section>
  </div>
)

export default TLDR
