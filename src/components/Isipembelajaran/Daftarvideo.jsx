import React, { useEffect, useState } from 'react'
import Buttom from '../Card/Buttom';
import './Daftarvideo.css'

const dataButtom = [{
    id: 1,
    judul: 'Video: Introcuction to HR',
    waktu: '12 Menit',
    gambar: '../src/assets/file1.svg' 
 },
  {
    id: 2,
    judul: 'Video: Introcuction to HR',
    waktu: '12 Menit',
    gambar: '../src/assets/Play_Circle.svg' 
  },
  {
    id: 3,
    judul: 'Video: Introcuction to HR',
    waktu: '12 Menit',
    gambar: '../src/assets/Play_Circle.svg' 
  },
  {
    id: 4,
    judul: 'Video: Introcuction to HR',
    waktu: '12 Menit',
    gambar: '../src/assets/Play_Circle.svg' 
},
{
    id: 5,
    judul: 'Rangkuman: Introcuction to HR',
    waktu: '12 Menit',
    gambar: '../src/assets/file1.svg' 
},
{
    id: 6,
    judul: 'Video: Introcuction to HR',
    waktu: '12 Menit',
    gambar: '../src/assets/file2.svg' 
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
    <main className='list-video1'>
      <div className='header-list'>
        <p>Daftar Modul</p>
      </div>
      <div className='list-button14'>
        <div className='section-btn'>
            <p className={`title-payment  ${DibukaSection === 'section-1' ? 'active' : ''}`} onClick={()=> DiBuka('section-1')}>Introduction to HR</p>
            <span className={`nav-atm ${DibukaSection === 'section-1' ? 'rotate' : ''}`} onClick={()=> DiBuka('section-1')}></span>
        </div>
       {DibukaSection === 'section-1' && (<div className="d-bayar1">
        <ul className='list1-buttom1'>
            {dataButtom.map((item) => (
                <li key={item.id} className='list-buttom'>
                <Buttom judul={item.judul} waktu={item.waktu} gambar={item.gambar} />
                </li>
            ))}
        </ul>
       </div>)}
       <div className='section-btn'>
            <p className={`title-payment  ${DibukaSection === 'section-2' ? 'active' : ''}`} onClick={()=> DiBuka('section-2')}>Introduction to HR</p>
            <span className={`nav-atm ${DibukaSection === 'section-2' ? 'rotate' : ''}`} onClick={()=> DiBuka('section-2')}></span>
        </div>
       {DibukaSection === 'section-2' && (<div className="d-bayar1">
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
