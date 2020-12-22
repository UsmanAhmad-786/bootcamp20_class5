import React, {useState} from 'react'
import './App.css';
import Parent from './Parent.js'
import CountContext from './CountContext'

function App() {
   let countState=useState(1) //similarly
// let [count, setCount]=useState(23)
  return (
    <CountContext.Provider value={countState}>
     
    <div>
      <Parent name="Usman"/>
    </div>
    </CountContext.Provider>
  );
}

export default App;
