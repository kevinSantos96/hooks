import React, { useState } from 'react'
import './counter.css';

export const CouterApp = () => {
  const [state, setState] = useState({
      counter1: 10,
      counter2: 20,
      counter3: 30,
      counter4: 40
  });

  const { counter1, counter2} = state;

    return (
        <>
            {/* <h1>Couter { counter }</h1> */}
            <h2>{ counter1 }</h2>
            <h2>{ counter2 }</h2>
            <hr />
            <button 
            className="btn btn-primary"
            onClick={()=>setState({
               ...state,
               counter1: counter1 + 1
            })}> +1 </button>
        </>
    )
}
