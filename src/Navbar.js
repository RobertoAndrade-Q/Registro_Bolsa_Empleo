import React from 'react';
import { Link, NavLink } from 'react-router-dom';


export const Navbar = () => {
    return (

        <header className='container header-container'>
            <div className="logo-utm">
                <a href="/">
                    <img src="https://www.utm.edu.ec/images/pagina_nueva/logo.png" alt="Logo UTM" />
                </a>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/dashboard-empresas/new-publication">Postulantes</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login-empresas">Empresas</NavLink>
                    </li>
                    <li>
                        <NavLink to="/register">Registrarse</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
        
    )
}
