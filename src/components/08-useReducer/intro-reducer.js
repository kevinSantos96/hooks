

const initialState =[{
    id: 1,
    todo: 'comprar pan',
    done: false
}];


//mi primer reducer

const todoReducer = (state =  initialState, action)=>{ // la accion es lo unico que va a modificar el state
    
    //si quiero agg debo poner un if aqui
    if ( action?.type === 'agregar'){ // ? si tiene algo
        return [...state, action.payload];
    }
    
    return state;
}

let todos = todoReducer();

//añadir un nuevo elemento

//no usuar push

const newTodo ={
    id: 2,
    todo: 'comprar huevos',
    done: false

}

const action ={
    type: 'agregar',
   payload: newTodo
}

todos = todoReducer( todos, action );

console.log(todos)