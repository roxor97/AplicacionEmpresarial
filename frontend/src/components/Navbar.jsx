import React, { Fragment, useState } from 'react'
import { Link } from "react-router-dom"
import "./Navbar.css"
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { IconContext } from 'react-icons'

const Navbar = ({ elements }) => {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => {
        setSidebar(!sidebar);
    }

    return (
        <Fragment>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className="navbar">
                    <Link to="#" className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                    <img className="logo" src="../media/Pregunta.png" alt=""/>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className="nav-menu-items" onClick={showSidebar}>
                        <li className="navbar-toggle">
                            <Link to="#" className="menu-bars">
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </li>
                        {elements.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.url}>
                                        {item.icon}
                                        <span> {item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </IconContext.Provider>
        </Fragment>
    )
}

export default Navbar
