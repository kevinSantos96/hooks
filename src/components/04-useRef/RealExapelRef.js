import React, { useState } from 'react';
import'../02-useEffect/Effect.css';
import { MultipleCustomHook } from '../03-examples/MultipleCustomHook';

export const RealExapelRef = () => {
     
    const [show, setshow] = useState(false);
     
    return (
        <div>
            <h1>Real Example Ref</h1>
            <hr/>
            {show && < MultipleCustomHook />}

            <button className='btn btn-success mt-02'
            onClick={()=>(
                setshow(!show)
            )}>
                Show / Hide
            </button>
        </div>
    )
}
