import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => (
    <>
        <nav className="main-menu" id="main-menu">
            <ul>
                <li><NavLink exact activeClassName="activo" to="/">Inicio</NavLink></li>
                <li><NavLink activeClassName="activo" to="/cursos">Cursos</NavLink></li>
                <li><NavLink activeClassName="activo" to="/formulario">Formulario</NavLink></li>

            </ul>
        </nav>
    </>
)
export default Navbar