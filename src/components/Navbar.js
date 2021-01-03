import React from 'react'
import { Link } from "react-router-dom";
import logo from '../img/Logo-4.png';
import CartIcon from './CardIcon'

const Navbar = () => {
        return (
                <div id="NavBar">
                        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark bkg">
                                <Link to='/'>
                                        <img src={logo} alt="store" className="nav-logo" />
                                </Link>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarCollapse">
                                        <ul className="navbar-nav mr-auto">
                                                <li className="nav-item active">
                
                                                 <Link to="/" className="nav-link">
                                                                Home
                                                        </Link>
                                                </li>
                                                <li className="nav-item">
                                                        <Link to="/" className="nav-link">
                                                                Nosotros
                                                        </Link>
                                                </li>
                                                <li className="nav-item">
                                                        <Link to="/" className="nav-link">
                                                                Contacto
                                                </Link>
                                                </li>
                                        </ul>

                                        <form className="form-inline mt-2 mt-md-0 offset-md-2">
                                                <CartIcon />
                                        </form>
                                </div>
                        </nav>
                </div>
        )
}
export default Navbar;