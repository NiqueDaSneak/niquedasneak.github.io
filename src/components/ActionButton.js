import React from 'react'

import quickIcon from '../assets/imgs/running.svg'
import '../assets/sass/actionbutton.sass'

const ActionButton = ( props ) => (
  <div className={ props.hidden ? 'actionButton hiddenTrue' : 'actionButton hiddenFalse' }>
    <img style={{
        width: '58%'
      }} src={quickIcon}/>
  </div>
)

export default ActionButton
