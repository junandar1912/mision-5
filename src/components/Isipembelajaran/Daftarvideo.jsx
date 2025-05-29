import React, { useEffect, useState } from 'react';
import Buttom from '../../components/Card/Buttom.jsx';
import './Daftarvideo.css';

const dataButtom = [
  {
    id: 1,
    judul: 'Video: Introduction to HR',
    waktu: '12 Menit',
    gambar: '../src/assets/file1.svg'
  },
  {
    id: 2,
    judul: 'Video: Introduction to HR',
    waktu: '12 Menit',
    gambar: '../src/assets/Play_Circle.svg'
  },
  {
    id: 3,
    judul: 'Video: Introduction to HR',
    waktu: '12 Menit',
    gambar: '../src/assets/Play_Circle.svg'
  },
  {
    id: 4,
    judul: 'Video: Introduction to HR',
    waktu: '12 Menit',
    gambar: '../src/assets/Play_Circle.svg'
  },
  {
    id: 5,
    judul: 'Rangkuman: Introduction to HR',
    waktu: '12 Menit',
    gambar: '../src/assets/file1.svg'
  },
  {
    id: 6,
    judul: 'Video: Introduction to HR',
    waktu: '12 Menit',
    gambar: '../src/assets/file2.svg'
  }
];

const Daftarvideo = () => {
  const [dibukaSection, setDibukaSection] = useState('section-1');
  const [buttomAktif, setButtomAktif] = useState(2);
  const [buttomSelesai, setButtomSelesai] = useState([]);

  const handleBukaSection = (id) => {
    setDibukaSection(prev => (prev === id ? null : id));
  };

  const toggleSelesai = (id) => {
    setButtomSelesai((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        !e.target.closest('.title-payment') &&
        !e.target.closest('.d-bayar1') &&
        !e.target.closest('.list-buttom1')
      ) {
        setDibukaSection(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

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
          <div className="d-bayar1">
            <ul className='list-buttom1'>
              {dataButtom.map((item) => (
                <li
                  key={item.id}
                  className={`list-buttom ${buttomAktif === item.id ? 'active' : ''} ${buttomSelesai.includes(item.id) ? 'selesai' : ''}`}
                  onClick={() => setButtomAktif(item.id)}
                >
                  <Buttom
                    judul={item.judul}
                    waktu={item.waktu}
                    gambar={item.gambar}
                    aktif={buttomAktif === item.id}
                    selesai={buttomSelesai.includes(item.id)}
                    onToggleSelesai={() => toggleSelesai(item.id)}
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
          <div className="d-bayar1">
            <ul>
              {dataButtom.map((item) => (
                <li
                  key={item.id}
                  className={`list-buttom ${buttomAktif === item.id ? 'active' : ''} ${buttomSelesai.includes(item.id) ? 'selesai' : ''}`}
                  onClick={() => setButtomAktif(item.id)}
                >
                  <Buttom
                    judul={item.judul}
                    waktu={item.waktu}
                    gambar={item.gambar}
                    aktif={buttomAktif === item.id}
                     selesai={buttomSelesai.includes(item.id)}
                    onToggleSelesai={() => toggleSelesai(item.id)}
                  />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <button className="selector-button">
        <span className="star-icon">★</span>
        Beri Review & Rating
      </button>
    </main>
  );
};

export default Daftarvideo;
