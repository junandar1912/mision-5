import React, { useRef, useState } from 'react'
import Datastore from '../../Datastore';
import './Headerprofil.css'
import { useNavigate } from 'react-router-dom';


const Header = (  ) => {

  const photoProfile = Datastore(state => state.user?.photo);
  const [open, setopen] = useState(false); // buka tutup buttom
  const Kategoris = ["Beranda", "Profil", "Semua Produk"]
  const KategoriRef = useRef();// dropdwon
  const navRef = useRef();
  const navigate = useNavigate()

  window.addEventListener('click', (jika)=>{ // perintah dropdown
    console.log(jika.target === navRef.current); 
  });

   const handleNavigate = (kategori) => {
    if(kategori === "Beranda") navigate('/');  // navigasi
    else if(kategori === "Profil") navigate('/profil'); 
    else if(kategori === "Semua Produk") navigate('/Semuaproduk'); 
    setopen(false); 
  }

  

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
                  <a 
                  key={Kategori} 
                  className='kat-con' 
                  onClick={()=> handleNavigate(Kategori)}>
                    {Kategori}
                  </a>
                ))
              }
             </d>
            </div>)}
            </div>
        </div>
        <div className='avatar-profil'>
          <img src={photoProfile} alt="profil" className='photo-profil'/>
        </div>
      </div>
    </header>
  )
}

export default Header
