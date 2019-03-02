import React from 'react'
import Ink from 'react-ink'

import '../assets/sass/btn.sass'
const Btn = ( props ) => (
  <div className='hoc'>
    <a href={props.link}>
      <span className='btnContainer' style={props.bgColor ? {backgroundColor: props.bgColor} : null}>
            <img className='icon' src={props.img} />
          <Ink duration={800} />
      </span>
    </a>
    <div>
      <span className='title'>{props.title}</span>
    </div>
  </div>
)

export default Btn
