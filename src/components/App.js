import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Frank from './Frank';
import { Switch, Route } from 'react-router-dom';
import Score from './Score';
function App(){
const [counter, setCounter] = useState(0);
  return (
    <div>
    <Header />
    <button onClick={() => setCounter(counter + 1)}  > Level UP </button>
    <p>{counter}</p>
    <Switch>
    <Route exact path='/' render={()=><Frank />}/>
    </Switch>
    </div>
  );
}

export default App;
