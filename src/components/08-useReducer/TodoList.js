import React from 'react'

export const TodoList = ({todo, id, handleDelete, handleToogle}) => {
   
   
   
    return (
        <li
          key={todo.id}
            className='list-group-item'> 
        <p className={`${ todo.done && 'complete'}`}
                onClick={() => handleToogle( todo.id )}>{id + 1}.{todo.desc}</p>
        <button className='btn btn-danger'
             onClick={() =>handleDelete( todo.id )}>
               Borrar
            </button>
        </li>
    )
}