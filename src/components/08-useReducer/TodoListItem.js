import React from 'react';
import { TodoList } from './TodoList';


export const TodoListItem = ({todos, handleDelete, handleToogle}) => {
    return (
         <ul className='list-group list-group-flush'>
                {
                    todos.map((todo, id)=>(
                        <TodoList 
                        key={todo.id}
                         todo = {todo}
                         id = {id}
                         handleDelete= {handleDelete}
                         handleToogle = {handleToogle}
                        />
                    ))
                }
                </ul>
        )
}
