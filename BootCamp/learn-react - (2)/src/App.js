import React, {useState} from 'react';
import './App.css';
import {Message} from './message.js';

function App() {

  let [count, setcount] =useState(0)
  let [ismorning, setmorning] = useState(true)

  return (
    <div id = "counter" className={`box ${ismorning ? 'daylight' : ''}`}>
      <h1>Good {ismorning ? 'Morning' : 'Night'}</h1>
     <Message counter={count}/>
     <br />
     <hr />
     <hr />
     <button onClick={() => setcount(++count)}>Update The Counter</button>
     <button onClick={()=> setmorning(!ismorning)}>Update Status</button>
    </div>
  );

}

export default App;
