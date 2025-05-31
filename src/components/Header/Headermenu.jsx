import React from 'react'
import './Headermenu.css'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Header = () => {

  const navigate = useNavigate()


  return (
    <header>
      <div className='nav-menu'>
        <div className='logo-menu'>
          <img src="../src/assets/gambar/logo.svg" className='photo' />
          <a href="./Semuaproduk" className='kategori'>kategori</a>
        </div>
        <div className='navbar'>
          <button type='submit' href="" className='login-nav'
          onClick={() => navigate ('/login')}>Login</button>
          <button type='submit' href="" className='regis-nav' 
          onClick={()=> navigate ('/registrasi')}>Registrasi</button>
        </div>
      </div>
    </header>
  )
}

export default Header
