import React, { useState, useEffect } from 'react'
import Buttom from '../../components/Card/Buttom.jsx'
import './Daftarvideo.css'

const Daftarvideo = ({
  dataButtom,
  buttomAktif,
  setButtomAktif,
  buttomSelesai,
  setButtomSelesai,
  onChangeDesc,
}) => {
  const [dibukaSection, setDibukaSection] = useState('section-1')

  const handleBukaSection = (id) => {
    setDibukaSection((prev) => (prev === id ? null : id))
  }

  const toggleSelesai = (id) => {
    setButtomSelesai((prev) =>
      prev.includes(id) ? prev : [...prev, id]
    )
  }

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        !e.target.closest('.title-payment') &&
        !e.target.closest('.d-bayar1') &&
        !e.target.closest('.list-buttom1')
      ) {
        setDibukaSection(null)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  const handleButtomClick = (item) => {
    if (onChangeDesc) {
      onChangeDesc(item.titleDesc, item.descriptionDesc, item.buttonDesc)
    }
  }

  return (
    <main className='list-video1'>
      <div className='header-list'>
        <p>Daftar Modul</p>
      </div>
      <div className='list-button14'>
        <div className='section-btn'>
          <p
            className={`title-payment ${dibukaSection === 'section-1' ? 'active' : ''}`}
            onClick={() => handleBukaSection('section-1')}
          >
            Introduction to HR
          </p>
          <span
            className={`nav-atm ${dibukaSection === 'section-1' ? 'rotate' : ''}`}
            onClick={() => handleBukaSection('section-1')}
          ></span>
        </div>
        {dibukaSection === 'section-1' && (
          <div className='d-bayar1'>
            <ul className='list-buttom1'>
              {dataButtom.map((item) => (
                <li
                  key={item.id}
                  className={`list-buttom ${
                    buttomAktif === item.id ? 'active' : ''
                  } ${buttomSelesai.includes(item.id) ? 'selesai' : ''}`}
                  onClick={() => {
                    setButtomAktif(item.id)
                    handleButtomClick(item)
                    
                  }}
                >
                  <Buttom
                    id={item.id}
                    titleDesc={item.titleDesc}
                    descriptionDesc={item.descriptionDesc}
                    buttonDesc={item.buttonDesc}
                    path={item.path}
                    judul={item.judul}
                    waktu={item.waktu}
                    gambar={item.gambar}
                    aktif={buttomAktif === item.id}
                  />
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className='section-btn'>
          <p
            className={`title-payment ${dibukaSection === 'section-2' ? 'active' : ''}`}
            onClick={() => handleBukaSection('section-2')}
          >
            Introduction to HR
          </p>
          <span
            className={`nav-atm ${dibukaSection === 'section-2' ? 'rotate' : ''}`}
            onClick={() => handleBukaSection('section-2')}
          ></span>
        </div>
        {dibukaSection === 'section-2' && (
          <div className='d-bayar1'>
            <ul className='list-buttom1'>
              {dataButtom.map((item) => (
                <li
                  key={item.id}
                  className={`list-buttom ${
                    buttomAktif === item.id ? 'active' : ''
                  } ${buttomSelesai.includes(item.id) ? 'selesai' : ''}`}
                  onClick={() => {
                    setButtomAktif(item.id)
                    handleButtomClick(item)
                    toggleSelesai(item.id); 
                  }}
                >
                  <Buttom
                    id={item.id}
                    titleDesc={item.titleDesc}
                    descriptionDesc={item.descriptionDesc}
                    buttonDesc={item.buttonDesc}
                    path={item.path}
                    judul={item.judul}
                    waktu={item.waktu}
                    gambar={item.gambar}
                    aktif={buttomAktif === item.id}
                    selesai={buttomSelesai.includes(item.id)} // untuk merubah ikon sengaja gak  saya hapus buat contoh dan penilai an doang lan
                    onToggleSelesai={() => toggleSelesai(item.id)}
                  />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <button className='selector-button'>
        <span className='star-icon'>★</span>
        Beri Review & Rating
      </button>
    </main>
  )
}

export default Daftarvideo
