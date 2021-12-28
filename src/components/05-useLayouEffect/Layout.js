import React from 'react'
import { useLayoutEffect } from 'react/cjs/react.production.min'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import './layout.css'

export const Layout = () => {
    
    const {counter , increment}  = useCounter(1); 

    const { data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
 
    const {quote}= !!data && data[0];
    
    useLayoutEffect(()=>{

    },[]);

    

    // console.log(state);

    return (
        <div>
            <h1> Layout Effect </h1>
            <hr/>
{/* 
           <div className='alert alert-info text-center'>
                Loading...
                </div> */}
            <blockquote className='blockquote text-right'> 
             <p className='mb-0'>{quote}</p>
             <br />
             {/* <footer className='blockquote-footer'>{author}</footer> */}
             </blockquote>
            <button className='btn btn-success' onClick={increment}><i className="fas fa-arrow-right"></i>Siguiente frase</button>

        </div>
    )
}