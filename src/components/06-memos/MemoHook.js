import React, { useMemo, useState } from 'react';
import { procesoPesado } from '../../helpers/ProcesoPesado';
import { useCounter } from '../../hooks/useCounter';
import '../02-useEffect/Effect.css';


export const MemoHook = () => {

    const {counter, increment} = useCounter(5000);
    const [show, setshow] = useState(true);
    
    

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])//memoriza acciones

    

    return (
        <div>
            <h1>Memo Hook</h1>
            <h3>Counter: <small>{counter} </small></h3>
            <hr />

            <p>{memoProcesoPesado}</p>
            
            <button className='btn btn-primary mt-02' onClick={increment}> Sumar +1 </button>
            <button className='btn btn-outline-primary mt-02'
            onClick={()=>(setshow(!show))}>
                Show / Hide {JSON.stringify(show)}
            </button>
        </div>
    )
}
