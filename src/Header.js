import React from 'react';
import './Header.css'
import { Search } from '@mui/icons-material';
import { ExpandMore } from '@mui/icons-material';
import { Language } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
      <Link to='/'>
        <img 
          className='header__icon'
          src='https://www.logo.wine/a/logo/Airbnb/Airbnb-Logo.wine.svg'
          alt=''
          /> 
      </Link>
        

        <div className='header__center'>
          <input type='text'/>
          <Search />
        </div>

        <div className='header__right'>
          <p>Become a host</p>
          <Language />
          <ExpandMore />
          <Avatar />
        </div>
    </div>
  )
}

export default Header