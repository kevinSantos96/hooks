import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const HomePage = () => {

    const {user} = useContext(UserContext); //nos va traer lo que tengamos en nuestro userConetxt
    
    console.log (user);
    return (
        <div>
            <h1>HomePage</h1>
            <hr/>

            <pre>
                {JSON.stringify( user, null, 3)}
            </pre>
        </div>
    )
}
