import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import '../02-useEffect/Effect.css'
export const MultipleCustomHook = () => {
    
    const {counter , increment}  = useCounter(1); 

    const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
 
    const {author, quote}= !!data && data[0];
       

    

    // console.log(state);

    return (
        <div>
            <h1> Breking Bad </h1>
            <hr/>

            {
                loading?(<div className='alert alert-info text-center'>
                Loading...
                </div>):
            (<blockquote className='blockquote text-right'> 
             <p className='mb-0'>{quote}</p>
             <br />
             <footer className='blockquote-footer'>{author}</footer>
             </blockquote>)
            }
            <button className='btn btn-success' onClick={increment}><i className="fas fa-arrow-right"></i>Siguiente frase</button>

        </div>
    )
}
