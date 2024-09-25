import {useState} from 'react';
import React from 'react';
const Counter=()=>{
    const [count, setCount]=useState(0);
    
    const increment=()=>{
        setCount(count+1);
    }
    const decrement=()=>{
        setCount(count-1);
    }
    return(
        <div>
        <h1>Counter App</h1>
        <h1>{count}</h1>
        <button onClick={increment}>Add</button>
        <button onClick={decrement}>substract</button>
        </div>
    );
}

export default Counter;