import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className='nav'>
        <div className='logo'>
          <img src="../src/assets/gambar/logo.svg" className='photo' />
        </div>
      </div>
    </header>
  )
}

export default Header
