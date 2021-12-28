import React, {memo} from 'react'


export const Small = memo(({value}) => {

    console.log('Me vengo!!!');
    return (
        <div>
          <small>{ value }</small>
        </div>
    )
});
