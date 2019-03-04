import React from 'react'
import Ink from 'react-ink'

import '../assets/sass/btn.sass'
const Btn = ( props ) => (
  <div className='hoc'>
    <a target='_blank' rel="noopener noreferrer" style={ { display: 'block'} } href={props.link}>
      <span className='btnContainer' style={props.bgColor ? {backgroundColor: props.bgColor} : null}>
            <img alt='Icon' className='icon' src={props.img} />
          <Ink duration={800} />
      </span>
    </a>
    <div>
      <span className='title'>{props.title}</span>
    </div>
  </div>
)

export default Btn
