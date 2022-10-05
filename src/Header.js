import React from 'react'
import Filters from './Filters'
import './Header.css'


function Header() {
  return (
    <div className='header-container'>
       <div className='header-search'>
            <h1 className='header-search-title'>Search properties to rent</h1>
            <input className='header-search-bar' type='text' placeholder='Search with Search Bar'></input>
       </div>
       <div className='header-filters'>
            <Filters/>
       </div>
    </div>
  )
}

export default Header