import React from 'react';
import PropTypes from "prop-types";

import './Score.css';

function Score(props){
  return(
    <div className='healthBox'>
    <h1> Score Nonsense</h1>
    <h1>Level:{props.level} </h1>
    <h1> Health score:{props.health} </h1>
    <h1>Love Score:{props.love} </h1>
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
