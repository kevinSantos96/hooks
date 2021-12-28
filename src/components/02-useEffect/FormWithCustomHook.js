import React from 'react'
import { useForm } from '../../hooks/useForm';
import './Effect.css';

export const FormwithCustomhook = () => {

    const [formState, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formState;

    

    // const handleInputChange = ({target})=>{
    //     // e.preventDefault();
    //     setformState({
    //         ...formState,
    //            [target.name]: target.value
    //     })
    // }

    const handleSubmit =(e)=>{
        e.preventDefault();

        console.log(formState);

    }
    return (
        <form onSubmit={ handleSubmit }>
            <h1>FormwithCustomhook</h1>
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
            <div className='form-group'>
                <input 
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="*****"
                  autoComplete='off'
                  value={password}
                  onChange={handleInputChange}
                />
            </div>
            
            <button type='submit' className='btn btn-primary'>
                guardar
            </button>

        </form>
    )
}
