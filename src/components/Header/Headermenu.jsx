import React from 'react'
import './Headermenu.css'

const Header = () => {
  return (
    <header>
      <div className='nav-menu'>
        <div className='logo-menu'>
          <img src="../src/assets/gambar/logo.svg" className='photo' />
          <a href="" className='kategori'>kategori</a>
        </div>
        <div className='navbar'>
          <button type='submit' href="" className='login-nav'>Login</button>
          <button type='submit' href="" className='regis-nav'>Registrasi</button>
        </div>
      </div>
    </header>
  )
}

export default Header
