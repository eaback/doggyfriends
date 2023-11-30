import React, {useState} from "react"
import {IoMdClose, IoMdContact, IoMdHome, IoMdImage, IoMdList, IoMdLogIn, IoMdMenu} from 'react-icons/io'
import './Header.css'
import { Link } from "react-router-dom"

const Header = () => {

    const [active, setActive] = useState(false)

    const activateNav = () => {
        setActive(!active)
    }



    return (
        <div className={active ? 'header' : 'header-mobile'}>

            <div className='menu-icon' onClick={activateNav}>
                {!active ? <IoMdMenu className='menu'/> : <IoMdClose className='menu'/>}
            </div>

                <nav>
                    <ul className={active ? 'ul-item' : 'ul-item oicon'}>
                        <li>
                            <IoMdHome className='icon'/>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            { /* icon */}
                            <IoMdList className='icon'/>
                            <Link to='/dog_catalog'>Dog Catalog</Link>
                        </li>
                        <li>
                            {/* icon for Dog Details */}
                            <IoMdImage className='icon'/>
                            <Link to='/dog_catalog/:dogName'>Dog Details</Link>
</li>
                    </ul>
                </nav>
        </div>
    )
}

export default Header