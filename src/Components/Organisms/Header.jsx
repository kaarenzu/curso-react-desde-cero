import React from 'react'
import Navbar from '../Atoms/Navbar'
import Logo from '../Atoms/Logo'

const Header = () => (
    <header className="main-header">
        <div className="ed-grid s-grid-5 lg-grid-4">
            <Logo/>
            <div className="s-grid-1 lg-cols-3 s-cross-center s-main-end header-links">
                <Navbar/>
                <div className="main-menu-toggle to-l" id="main-menu-toggle"></div>
            </div>
        </div>
    </header>


)

export default Header