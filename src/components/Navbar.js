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
                <div className="navbar-logo">
                 <h1>Maria (firewalk) Shchurova</h1><br></br>
                 <h4>game design and software development</h4><br></br>
                 <h6>NOT a web designer obviously</h6>
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
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar
