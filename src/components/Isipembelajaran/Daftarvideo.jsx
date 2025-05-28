import React, { useEffect, useState } from 'react'
import Buttom from '../Card/Buttom';
import './Daftarvideo.css'

const dataButtom = [{
    id: 1,
    judul: 'Pengantar Pembelajaran',
    waktu: '00:05:00',
    gambar: 'https://img.youtube.com/vi/2g8b0k3j4a4/hqdefault.jpg'
  },
  {
    id: 2,
    judul: 'Pengantar Pembelajaran',
    waktu: '00:05:00',
    gambar: 'https://img.youtube.com/vi/2g8b0k3j4a4/hqdefault.jpg'
  },
  {
    id: 3,
    judul: 'Pengantar Pembelajaran',
    waktu: '00:05:00',
    gambar: 'https://img.youtube.com/vi/2g8b0k3j4a4/hqdefault.jpg'
  },
  {
    id: 4,
    judul: 'Pengantar Pembelajaran',
    waktu: '00:05:00',
    gambar: 'https://img.youtube.com/vi/2g8b0k3j4a4/hqdefault.jpg'
}]




const Daftarvideo = () => {

    const [DibukaSection, setOpenDibuka] = useState(null);
        
        
          const DiBuka = (id)=> {
            setOpenDibuka (prev => (prev === id ? null : id));
          }
        
          useEffect(()=> {
            const handleClickOutside = (jika) => {
              if (!jika.target.closest('.title-payment') && !jika.target.closest('.d-bayar')) {
                setOpenDibuka(null);
              }
            };
            document.addEventListener('click', handleClickOutside);
            return () => document.removeEventListener('click', handleClickOutside);
          },[]);




  return (
    <main className='list-video'>
      <div className='header-list'>
        <p>Daftar Modul</p>
      </div>
      <div className='list-button'>
        <div className='section-header'>
            <p className={`title-payment  ${DibukaSection === 'section-1' ? 'active' : ''}`} onClick={()=> DiBuka('section-1')}>Introduction to HR</p>
            <span className={`nav-atm ${DibukaSection === 'section-1' ? 'rotate' : ''}`} onClick={()=> DiBuka('section-1')}></span>
        </div>
       {DibukaSection === 'section-1' && (<div className="d-bayar">
        <ul>
            {dataButtom.map((item) => (
                <li key={item.id}>
                <Buttom judul={item.judul} waktu={item.waktu} gambar={item.gambar} />
                </li>
            ))}
        </ul>
       </div>)}
       <div className='section-header'>
            <p className={`title-payment  ${DibukaSection === 'section-2' ? 'active' : ''}`} onClick={()=> DiBuka('section-2')}>Introduction to HR</p>
            <span className={`nav-atm ${DibukaSection === 'section-2' ? 'rotate' : ''}`} onClick={()=> DiBuka('section-2')}></span>
        </div>
       {DibukaSection === 'section-2' && (<div className="d-bayar">
        <ul>
            {dataButtom.map((item) => (
                <li key={item.id}>
                <Buttom judul={item.judul} waktu={item.waktu} gambar={item.gambar} />
                </li>
            ))}
        </ul>
       </div>)}
       <div className='section-header'>
            <p className={`title-payment  ${DibukaSection === 'section-3' ? 'active' : ''}`} onClick={()=> DiBuka('section-3')}>Introduction to HR</p>
            <span className={`nav-atm ${DibukaSection === 'section-3' ? 'rotate' : ''}`} onClick={()=> DiBuka('section-3')}></span>
        </div>
       {DibukaSection === 'section-3' && (<div className="d-bayar">
        <ul>
            {dataButtom.map((item) => (
                <li key={item.id}>
                <Buttom judul={item.judul} waktu={item.waktu} gambar={item.gambar} />
                </li>
            ))}
        </ul>
       </div>)}
      </div>
      <button className="selector-button">
        <span className="star-icon">★</span>
        Beri Review & Rating
      </button>
    </main>
  )
}

export default Daftarvideo
