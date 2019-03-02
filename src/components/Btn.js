import React from 'react'

import '../assets/sass/btn.sass'
const Btn = ( props ) => (
<div className='hoc'>
  <span className='btnContainer' style={props.bgColor ? {backgroundColor: props.bgColor} : null}>
    <a href={props.link}>
      <img className='icon' src={props.img} />
    </a>
  </span>
  <div>
    <span className='title'>{props.title}</span>
  </div>
</div>
)

export default Btn
