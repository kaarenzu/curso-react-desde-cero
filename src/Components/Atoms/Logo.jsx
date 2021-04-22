import React from 'react'
import logo from '../../img/logojob.svg'
import {Link} from 'react-router-dom'
const Logo = () => (
    <>
        <div className="s-cols-4 lg-cols-1 s-cross-center">
            <Link to="/">
                <img className="main-logo"
                    src={logo}
                    alt="Logo edteam" />
            </Link>
        </div>
    </>
)
export default Logo