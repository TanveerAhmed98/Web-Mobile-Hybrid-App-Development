import React, { useReducer } from 'react';
import counterReducer from './counterreducer.js';
const Child2 = () => {
    let [state, dispatch] = useReducer(counterReducer, 0);
    return(
        <div>
        <h1>Using Counter Reducer</h1>
        <h1>The Value Of A Reducer State is: {state}</h1>
        <button onClick={()=>dispatch('INCREMENT')}>Click Here For Reducer Increment</button>
        </div>
    )
}
export default Child2;
