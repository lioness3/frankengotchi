import React, { useState } from 'react';
import PropTypes from "prop-types";

import './Score.css';
function Score(props){
  let interval = 100
    setInterval(() => {
      setTimer(timer -1)
    }, 2000);


  console.log(interval);
  const [counter, setCounter] = useState(0);
  const [timer, setTimer] = useState(100);
  return(
    <div className='healthBox'>
    <h1> Score Nonsense</h1>
    <h1>Level:{counter}</h1>
        <button onClick={() => setCounter(counter + 1)}  > Level UP </button>
    <h1> Health Meter:{props.health}{timer} </h1>
    <h1>Love Meter:{props.love} </h1>
    <h1>Sleep Meter:{props.sleep}</h1>
    </div>
  )
}

Score.propTypes={
level:PropTypes.number,
love:PropTypes.number,
health: PropTypes.number,
sleep:PropTypes.number,
levelup:PropTypes.func
}
export default Score;
