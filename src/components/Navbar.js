import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960)
        {
            setButton(false);
        }
        else{
            setButton(true);
        }
    }

    useEffect(( )=>
        {
            showButton();
        },[button]);

    window.addEventListener('resize', showButton);
  return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <div class="navbar-logo">
                 <p1>Maria (firewalk) Shchurova</p1><br></br>
                 <p2>game design and software development</p2>
                </div> 
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"} /> 
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                            About
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar
