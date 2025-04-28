import React from 'react'
import './Headerprofil.css'

const Header = ({image}) => {
  return (
    <header>
      <div className='nav-detail'>
        <div className='logo-detail'>
          <img src="../src/assets/gambar/logo.svg" className='photo' />
          <button className='nav-head'>Kategori</button>
        </div>
        <div className='avatar-profil'>
          <img src={image} alt="profil" className='photo-profil'/>
        </div>
      </div>
    </header>
  )
}

export default Header
