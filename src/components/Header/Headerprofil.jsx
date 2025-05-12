import React, { useRef, useState } from 'react'
import './Headerprofil.css'


const Header = ( Nama ) => {

  const [open, setopen] = useState(false);
  const Kategoris = ["Teknologi", "Bisnis", "Setting"]

  //usestate
  
  const KategoriRef = useRef();
  const navRef = useRef();

  window.addEventListener('click', (jika)=>{
    console.log(jika.target === navRef.current);
  });

  return (
    <header>
      <div className='nav-detail'>
        <div className='logo-detail'>
          <img src="../src/assets/gambar/logo.svg" className='photo' />\
          <div className='dropdown-container'>
            <button className="nav-head" onClick={() => setopen(!open)} ref={navRef} >
              Kategori
            </button>
            {open && (
            <div className='dropdown' ref={KategoriRef}>
             <d className='tombol-drop'>
              {
                Kategoris.map((Kategori)=> (
                  <a key={Kategori} className='kat-con'>
                    {Kategori}
                  </a>
                ))
              }
             </d>
            </div>)}
            </div>
        </div>
        <div className='avatar-profil'>
          <img src="../src/assets/gambar/avatar/avatar.png" alt="profil" className='photo-profil'/>
        </div>
      </div>
    </header>
  )
}

export default Header
