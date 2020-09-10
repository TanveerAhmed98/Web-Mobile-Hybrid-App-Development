import React, {useState} from 'react';
import './App.css';
import Parent from './parent.js';
import counterContext from './countercontext.js';
function App() {
  let countState = useState(0);
  return (
    <counterContext.Provider value = {countState}>
    <div>
    <Parent />
    </div>
    </counterContext.Provider>
  );
}
export default App;
