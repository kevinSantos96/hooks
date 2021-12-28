import React from 'react'
import '../02-useEffect/Effect.css'

export const FocusScreen = () => {
    
    // const inpuRef = useRef();
  
   const handleClick = ()=>{
       document.querySelector('input').select();
        // inpuRef.current.select(); 

   }

    return (
        <div>
            <h1>Focus Screen</h1>
            <input
            type='text'
            className='form-control'
            placeholder='Su Nombre'
            />
            
            <button className='btn btn-outline-primary mt-2'
                    onClick={handleClick}
            >
            Focus</button>
        </div>
    )
}
