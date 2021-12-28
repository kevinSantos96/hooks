import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAddForm = ({ handleAddTodo }) => {
    
    const [ {descripcion}, hanleInputChange, reset ] = useForm({
        descripcion: ''
    });
    
    const handleSubmit = (e)=>{
        e.preventDefault();
       
        if( descripcion.trim().length<=1){ // no agregar objetos vacios
            return;
        }
        const newTodo = {
            id: new Date().getTime(),
            desc: descripcion,
            done: false
        };
       handleAddTodo(newTodo);
        reset();
    }



    return (
        <>
             <h4>Agregar</h4>
                <hr />

                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text"
                            name="descripcion"
                            className='form-control'
                            placeholder="Aprender..."
                            autoComplete='off'
                            value = {descripcion}
                            onChange={hanleInputChange}
                        />
                        <button
                        type='submit' 
                        className='btn btn-outline-success btn-block'>
                            Agregar
                        </button>
                    </form>
        </>
    )
}
