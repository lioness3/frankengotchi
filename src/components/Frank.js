import React from 'react';
import Score from './Score';
import Time from './Time'

function Frank(){
  return(
    <div>
      <p>Hey, I'm Frank</p>
       <span style={{fontSize:'100px'}}>🧟‍♂️</span>
       <Time/>
       <Score />
    </div>
  )
}

export default Frank
