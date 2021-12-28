
//en los props siempre definir el state y action
export const todoReducer = ( state = [], action)=>{

    //la mayoria de los casos trabajarlo con swicth
    
    switch (action.type) {
        case 'add':
            
            return [...state,action.payload];
        
        case 'delete':
            return state.filter( todo=> todo.id !== action.payload );// va regresar los elementos que cumplan una condición    
        
        case 'toggle':
            return state.map(todo=>{
                
                if ( todo.id === action.payload ){
                    return{
                        ...todo,
                        done: !todo.done
                    }
                }else{
                    return todo;
                }
            })
    
        default:
            return state;
    }

}