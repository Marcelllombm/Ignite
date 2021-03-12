import { useState } from 'react';

export function Counter() {
    const [counter, setCounter] = useState(0);
    function increment(){
        setCounter(counter + 1);
    }
    function descrement(){
        setCounter(counter -1)
    }
  
    return (
        <div>
            <h2>{counter}</h2>
            <button type='button' onClick={increment}>increment + 1</button> 
            <button type='button' onClick={descrement}>descrement - 1</button>   
        </div>
    )
}
