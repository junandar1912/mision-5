import React, { useState } from 'react'
import Headerprofile from '../../components/Header/Headerprofil.jsx'
import Cardprofil from '../../components/Komponen-profil/Cardprofil.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import './Profil.css'



const Profil = () => {

   const [activeTab, setActiveTab] = useState('profil');



  return (
    <>
     <Headerprofile />
     <div className='body'>
      <main className='container-cardprofil'>
      <div className='data-profil'>
        <div className='title-data-profil'>
          <h1>Ubah Profil</h1>
          <p className='p-data'>Ubah data diri Anda</p>
        </div>
        <div className='container-button-profil'>
          <button className='b-profil'><img src="../src/assets/profil/Person2.svg" alt="" onClick={() => setActiveTab('profil')}/><p>Profil Saya</p></button>
          <button className='b-profil'><img src="../src/assets/profil/Keranjanga.svg" alt="" /><p>Kelas Saya</p></button>
          <button className='b-profil'><img src="../src/assets/profil/Bukua.svg" alt="" /><p>Pesanan Saya</p></button>
        </div>
       </div>
       <div className='data-2profil'>
         {activeTab === 'profil' && <Cardprofil />}
         {activeTab === 'kelas' && <div>Halaman Kelas Saya</div>}
         {activeTab === 'pesanan' && <div>Halaman Pesanan Saya</div>}
       </div>
      </main>
     </div> 
     <Footer />
    </>
  )
}

export default Profil
