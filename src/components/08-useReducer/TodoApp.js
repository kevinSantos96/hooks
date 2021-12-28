import React, { useEffect, useReducer } from 'react'
// import { useForm } from '../../hooks/useForm';
import { todoReducer } from './todoReducer';
import './style.css';
import { TodoListItem } from './TodoListItem';
import { TodoAddForm } from './TodoAddForm';


//punto inicial del reducer


const init = ()=>{

    return JSON.parse(localStorage.getItem('todos')) || [];//si hay todos los va a traer, si no lo va traer null y un objeto vacio
    // return [{
    //     id: new Date().getTime(),
    //     desc: 'Aprender React',
    //     done: false
    // }];
}

export const TodoApp = () => {
    

    const [ todos, dispatch ] = useReducer(todoReducer, [] , init); //init nos sirve para que cada que hay cambios no se este ejecutando

    // console.log (todos);
   


    const handleAddTodo = (newTodo)=>{
        
        dispatch({
            type:'add',
            payload: newTodo
        });
    }
        
    //grabar en el localStorage cuando haya un cambio en el todo
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos]);

    
    //Eliminar elemento
    const handleDelete = (todoId)=>{

        const action ={
            type:'delete',
            payload: todoId
        };
        dispatch( action );
    }


    const handleToogle = (todoId)=>{

        dispatch({
            type: 'toggle',
            payload: todoId
        });

    }
    

    return (
        <div>
            <h1>TodoAPP ({todos.length}) </h1>
            <hr />

            <div className='row'>
                <div className='col-sm-7'>
                <label className='text-center'>Todos</label>
                  <TodoListItem 
                     todos = {todos}
                     handleDelete={handleDelete}
                     handleToogle={handleToogle}
                  />
                </div>
                <div className='col-sm-5'>
                   <TodoAddForm handleAddTodo={handleAddTodo}/>
                </div>
            </div>
        </div>
    )
}
