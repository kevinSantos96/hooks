import React, { useContext } from 'react'
import { UserContext } from './UserContext'


export const LoginScreen = () => {
   
   const { setUser } = useContext(UserContext);

//    const handleLogin =()=> (setUser(
//           {
//               id: 1234,
//               name: 'Kevin'
//           }
//         ))
   
    return (
        <div>
            <h1>LoginScreen</h1>
            <hr/>

            <button className='btn btn-primary'
                    onClick={ ()=>setUser({
                        id: 1234,
                        name: 'Kevin'
                    })}>
                Login
            </button>
        </div>
    )
}
