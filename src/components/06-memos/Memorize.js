import React, { useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import '../02-useEffect/Effect.css';
import { Small } from './Small';

export const Memorize = () => {

    const {counter, increment} = useCounter(10);

    const [show, setshow] = useState(true);

    

    return (
        <div>
            <h1>Counter: <Small value={counter} /></h1>
            <hr />
            
            <button className='btn btn-primary mt-02' onClick={increment}> Sumar +1 </button>
            <button className='btn btn-outline-primary mt-02'
            onClick={()=>(setshow(!show))}>
                Show / Hide {JSON.stringify(show)}
            </button>
        </div>
    )
}
