import React, { useState } from 'react';
import Headerprogres from '../../components/Isipembelajaran/Headerprogres';
import Footerp from '../../components/Isipembelajaran/FooterP';
import Daftarvideo from '../../components/Isipembelajaran/Daftarvideo';
import Switch from '../../components/Switch/Switch';
import './Pembelajaran.css'


const Pembelajaran = () => {

  const [rating, setRating] = useState(3);

  const [buttomAktif, setButtomAktif] = useState(null);
  const [buttomSelesai, setButtomSelesai] = useState([]);
  
  // Data tombol dummy agar Daftarvideo tidak error
  const dataButtom = [
    {
      id: 1,
      judul: 'Video Sample',
      waktu: '10 Menit',
      gambar: '../src/assets/file1.svg',
      titleDesc: 'Judul Sample',
      descriptionDesc: 'Deskripsi sample video',
      buttonDesc: 'Mulai',
    },
    {
      id: 2,
      judul: 'Video: Introduction to HR',
      waktu: '12 Menit',
      gambar: '../src/assets/Play_Circle.svg',
    },
    {
      id: 3,
      judul: 'Video: Introduction to HR',
      waktu: '12 Menit',
      gambar: '../src/assets/Play_Circle.svg',
    },
    {
      id: 4,
      judul: 'Video: Introduction to HR',
      waktu: '12 Menit',
      gambar: '../src/assets/Play_Circle.svg',
    },
    {
      id: 5,
      judul: 'Rangkuman: Introduction to HR',
      waktu: '12 Menit',
      gambar: '../src/assets/file1.svg',
    },
    {
      id: 6,
      judul: 'Quiz: Introduction to HR',
      waktu: '12 Menit',
      gambar: '../src/assets/file2.svg',
    }
  ];




  return (
    <>
      <Headerprogres />
      <main className="body1">
        <div className="cont-play">
          <img
            src="../src/assets/Playvideo.svg"
            alt="video"
            style={{ width: '100%', height: '505px' }}
          />
          <div className='card-playvideo'>
            <div className='title-play'>
              <h1>Praktikkan Skill dengan Technical Book</h1>
              <p>Pelajari dan praktikkan skill teknis dalam berbagai industri dengan Technical Book Riselearn</p>
            </div>
            <div className='profil-playvideo'>
              <img src="../src/assets/gambar/avatar/avatar(1).svg" 
              alt="avatar" style={{height:'42px', width:'42px', borderRadius:'10px'}}/>
              <div className='profil-play'>
                <h1>Jenna Ortega</h1>
                <p>Senior Accountant Di GOJEK</p>
              </div>
            </div>
            <div className="star-rating-container">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                key={star} className={`star ${rating >= star ? 'active' : ''}`}
                onClick={() => setRating(star)}>★</span>))}
                <p>3.5(86)</p>
            </div>
          </div>
        </div>
        <Daftarvideo
          dataButtom={dataButtom}
          buttomAktif={buttomAktif}
          setButtomAktif={setButtomAktif}
          buttomSelesai={buttomSelesai}
          setButtomSelesai={setButtomSelesai}
         />
      </main>
      <Footerp />
    </>
  );
};

export default Pembelajaran;
