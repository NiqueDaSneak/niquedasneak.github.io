import React from 'react'
import Ink from 'react-ink'

import quickIcon from '../assets/imgs/running.svg'
import '../assets/sass/actionbutton.sass'

const ActionButton = ( props ) => (
  <div onClick={ props.toggleTLDR } className={ props.hidden ? 'actionButton hiddenTrue' : 'actionButton hiddenFalse' }>
    <img alt='Action Button' style={{
        width: '58%'
      }} src={quickIcon}/>
      <Ink duration={800} />
  </div>
)

export default ActionButton
