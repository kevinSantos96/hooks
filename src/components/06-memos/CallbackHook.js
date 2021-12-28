import React, { useCallback, useState } from 'react';
import '../02-useEffect/Effect.css';
import { Showincrement } from './Showincrement';
export const CallbackHook = () => {

    const [counter, setcounter] = useState(10)

    // const increment = ()=>{
    //     setcounter(counter + 1);
    // }

    const increment = useCallback((num)=>{
        setcounter(e=>e + num);//regresa una funcion memorizada para poder exportar a otrosd documentos
    },[setcounter]);

    return (
        <div>
            <h1> Callback Hook: {counter}</h1>
            <hr/>

            <Showincrement  increment={increment}/>
        </div>
    )
}
