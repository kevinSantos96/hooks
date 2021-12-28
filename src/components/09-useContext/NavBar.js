import React from 'react'
import { NavLink } from 'react-router-dom'


export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">UseContext</NavLink>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <NavLink  activeClassNAme="active"  className="nav-link" aria-current="page" to="/">Home</NavLink>
                <NavLink  activeClassNAme="active" className="nav-link" to="/about">About</NavLink>
                <NavLink  activeClassNAme="active" className="nav-link" to="/login">Login</NavLink>
            </div>
            </div>
        </div>
        </nav>
    )
}