import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { AboutScreen } from './AboutScreen';
import { HomePage } from './HomePage';
import { LoginScreen } from './LoginScreen';
import { NavBar } from './NavBar';



export const AppRouter = () => { //AppRouter lexportamos a mainApp
    return (
           
        <Router>
            <div>
                <NavBar />
                <div className='container'>
                    <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route exact path="/about" element={<AboutScreen />} />
                    <Route exact path="/login" element={<LoginScreen />} />
                    <Route element={<HomePage />}/>
                    </Routes>

                </div>
                

            </div>
        </Router>
    )
}
