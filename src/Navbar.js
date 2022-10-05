import React from 'react'
import './Navbar.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faAngleDown, faHouseUser} from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  return (
    <div className='nav-container'>
        <div className='nav-menu-container'>
            <div className='nav-logo-container'>
                <FontAwesomeIcon icon={faHouseUser} className='nav-logo'/>
                <p className='nav-title'>Estatery</p>
            </div>
            <p className='nav-item nav-item-active'>Rent</p>
            <p className='nav-item'>Buy</p>
            <p className='nav-item'>Sell</p>
            <div className='nav-item'>
                <p>Manage Property</p>
                <FontAwesomeIcon className='nav-icon' icon={faAngleDown} />
            </div>
            <div className='nav-item'>
                <p>Resources</p>
                <FontAwesomeIcon className='nav-icon' icon={faAngleDown} />
            </div>
        </div>
        <div className='nav-button-container'>
            <button className='nav-button'>Login</button>
            <button className='nav-button nav-button-purple'>Sign up</button>
        </div>
    </div>
  )
}

export default Navbar