import React, { useState, useEffect } from 'react';
import PropTypes from "prop-types";

import './Score.css';
function Score(props){

// let countDown =   setInterval(() => {
//       setTimer( timer -=1)
//     }, 1000);

    useEffect(() => {
  const interval = setInterval(() => {

    setSeconds(seconds  => seconds - 1);
  }, 1000);

  return () => clearInterval(interval);
}, []);

  // let [timer, setTimer] = useState(5);
  // if(timer == 0){
  //   console.log(timer);
  // countDown = clearInterval();



  let [seconds, setSeconds] = useState(10000000);
  useEffect(() => {
const interval = setInterval(() => {

  setSeconds(seconds  => seconds - 1);
}, 1000);

return () => clearInterval(interval);
}, []);


  let [health, setHealth] = useState(10000000);
  useEffect(() => {
const interval = setInterval(() => {

  setHealth(health  => health - 1);
}, 1000);

return () => clearInterval(interval);
}, []);


  let [love, setLove] = useState(10000000);
  useEffect(() => {
const interval = setInterval(() => {

  setLove(love  => love - 1);
}, 1000);

return () => clearInterval(interval);
}, []);


let [sleep, setSleep] = useState(10000000);
useEffect(() => {
const interval = setInterval(() => {

setSleep(sleep  => sleep - 1);
}, 1000);

return () => clearInterval(interval);
}, []);

const [counter, setCounter] = useState(0);


  return(
    <div className='healthBox'>
    <h1> Score Nonsense</h1>
    <h1>Level:{counter}</h1>
        <button onClick={() => setCounter(counter + 1)}  > Level UP </button>

    <h1> Health Meter:{health} <button onClick={() => setHealth(health + 5)}  > Level UP </button></h1>

    <h1>Love Meter:{love} <button onClick={() => setLove(love + 5)}  > Level UP </button></h1>

    <h1>Sleep Meter:{sleep} <button onClick={() => setSleep(sleep + 5)}  > Level UP </button></h1>
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
