import React, { useState } from 'react'
import Headerprofile from '../../components/Header/Headerprofil.jsx'
import Cardprofil from '../../components/Komponen-profil/Cardprofil.jsx';
import Kelassaya from '../../components/Komponen-profil/Kelassaya.jsx';
import Pesanan from '../../components/Komponen-profil/Pesanan.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import './Profil.css'



const Profil = () => {
  // state button untuk merubah page
   const [activeTab, setActiveTab] = useState('profil');

   
  // merubah judul dan deskripsi
  const renderTitleAndDescription = () => {
    switch (activeTab) {
      case 'profil':
        return (
          <>
            <h1>Ubah Profil</h1>
            <p className="p-data">Ubah data diri Anda</p>
          </>
        );
      case 'kelas':
        return (
          <>
            <h1>Daftar Kelas</h1>
            <p className="p-data">Akses Materi Belajar dan Mulailah Meningkatkan
              Pengetahuan Anda
            </p>
          </>
        );
      case 'pesanan':
        return (
          <>
            <h1>Riwayat Pesanan</h1>
            <p className="p-data">Informasi terperinci mengenai pembelian</p>
          </>
        );
      default:
        return null;
    }
  };


  return (
    <>
     <Headerprofile />
     <div className='body'>
      <main className='container-cardprofil'>
      <div className='data-profil'>
        <div className='title-data-profil'>{renderTitleAndDescription()}</div>
        <div className='container-button-profil'>
          <button className={`b-profil ${activeTab === 'profil' ? 'active' : ''}`} onClick={() => setActiveTab('profil')}>
            <img src="../src/assets/profil/Person2.svg" alt=""/>
            <p>Profil Saya</p>
            </button>
          <button className={`b-profil ${activeTab === 'profil' ? 'active' : ''}`} onClick={() => setActiveTab('kelas')}>
            <img src="../src/assets/profil/Keranjanga.svg" alt="" />
            <p>Kelas Saya</p>
            </button>
          <button className={`b-profil ${activeTab === 'profil' ? 'active' : ''}`} onClick={() => setActiveTab('pesanan')}>
            <img src="../src/assets/profil/Bukua.svg" alt="" />
            <p>Pesanan Saya</p>
            </button>
        </div>
       </div>
       <div className='data-2profil'>
         {activeTab === 'profil' && <Cardprofil />}
         {activeTab === 'kelas' && <Kelassaya/>}
         {activeTab === 'pesanan' && <Pesanan />}
       </div>
      </main>
     </div> 
     <Footer />
    </>
  )
}

export default Profil
