import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Frank from './Frank';
import { Switch, Route } from 'react-router-dom';
import Score from './Score';
function App(){

  return (
    <div>
    <Header />


    <Switch>
    <Route exact path='/' render={()=><Frank />}/>
    </Switch>
    </div>
  );
}

export default App;
