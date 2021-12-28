import React from 'react'

export const Showincrement = React.memo(({increment}) => {
    return (
        <button className='btn btn-primary mt-02'
        onClick={()=>{
            increment(5);
        }}
        >
          Incrementar
        </button>
    )
})
