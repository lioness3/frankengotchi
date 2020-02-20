import React from 'react';
import Score from './Score';
import Time from './Time';
import './Frank.css'

function Frank(){
  return(
    <div>
      <p>Hey, I'm Frank</p>
       <span className='frank'>🧟‍♂️
       <span className='gear'> ⚙️</span></span>
       <Time/>
       <Score />
    </div>
  )
}

export default Frank
