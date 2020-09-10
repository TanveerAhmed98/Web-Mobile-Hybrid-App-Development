import React, {useContext} from 'react';
import counterContext from './countercontext.js';
const Child = () => {
    let counterValue = useContext(counterContext)
    return(
        <div>
        <h1>Using Counter Context</h1>
        <h1>The Value Of A Context State is: {counterValue[0]}</h1>
        <button onClick={()=>{counterValue[1](++counterValue[0])}}>Click Here For Context Increment</button>
        </div>
    )
}
export  default Child;
