import React, { useState, useEffect } from 'react'
// import { useEffect } from 'react/cjs/react.production.min'

export const Message = () => {
    
    const [coors, setcoors] = useState({x:0, y:0});//poner fura de un hook o useeffect
        
    const { x , y } = coors;

    useEffect(() => {    

        const mouseMove = (e)=>{
            const coors= { x:e.x, y:e.y };
            setcoors(coors);

        }

        window.addEventListener('mousemove',mouseMove);

        return () => {
            window.removeEventListener('mousemove',mouseMove);
        }
    }, []);
    return (
        <div>
            <h3>Karlencita</h3>
            <p>x:{x} y:{y}</p>
        </div>
    )
}
 