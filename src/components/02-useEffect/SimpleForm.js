import React, { useEffect, useState } from 'react'
import './Effect.css';
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setformState] = useState({
        name: '',
        email: ''
    });

    const {name, email} = formState;

    useEffect(()=>{
          
    },[]);

    useEffect(()=>{
          
    },[email]);
    useEffect(()=>{
          
    },[formState]);

    const handleInputChange = ({target})=>{
        // e.preventDefault();
        setformState({
            ...formState,
               [target.name]: target.value
        })
    }
    return (
        <>
            <h1> Use Effect</h1>
            <hr />
            <div className='form-group'>
                <input 
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Tu nombre"
                  autoComplete='off'
                  value={name}
                  onChange={handleInputChange}
                />
            </div>
            <div className='form-group'>
                <input 
                  type="text"
                  name="email"
                  className="form-control"
                  placeholder="example@gmail.com"
                  autoComplete='off'
                  value={email}
                  onChange={handleInputChange}
                />
            </div>
            {(name ==="Kevin")&& <Message /> }

        </>
    )
}
