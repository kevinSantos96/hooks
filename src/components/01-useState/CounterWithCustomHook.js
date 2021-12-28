import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import './counter.css'
export const CounterWithCustomHook = () => {
    
   const{ state, increment, decrement, reset} = useCounter(100);
     

    return (
        <>
        <h2>Couter With Custom: { state }  </h2>
        <hr />

        <button className="btn btn-primary" onClick={()=>increment(2)}>  +1  </button>
        <button className="btn btn-warning" onClick={()=>decrement(2)} >  -1  </button>
        <button className="btn btn-success" onClick={reset} >  Reset  </button>

            
        </>
    )
}
