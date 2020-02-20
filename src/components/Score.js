import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";

import './Score.css';
function Score(props){
  let [health, setHealth] = useState(10);
  let [sleep, setSleep] = useState(10);
  let btnColor = "green"
  let [color, setColor] = useState('green');

  let healthCountDown = () => {

    if (health < 1 ) { return }
    setTimeout(()=>{
      setHealth(health - 1, healthCountDown)
    },1000)
  }

healthCountDown()

  return(
    <div className='healthBox'>
    <h1> Score Nonsense</h1>


    <h1> <span style={{backgroundColor:color}}>Health Meter:{health}</span> </h1>
    <h1> Sleep Meter:{sleep} <button onClick={() => setSleep(sleep + 5)}  > Level UP </button></h1>

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
