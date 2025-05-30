import React, { useState } from 'react'
import Headerprogres from '../../components/Isipembelajaran/Headerprogres.jsx'
import Footerp from '../../components/Isipembelajaran/FooterP.jsx'
import Daftarvideo from '../../components/Isipembelajaran/Daftarvideo.jsx'
import Checkbox from '../../components/Checkbox/Checkbox.jsx'
import './selamat.css'




const Cobakembali = () => {

  
  
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
     <main className='body1'>
        <div className='container-selamat'>
          <img src="../src/assets/Gagal.svg" alt="" />
          <form className='hasil-soal'>
            <div className='titel-selamat'>
              <h1>Tanggal Pretest: </h1>
              <p>23 September 2022, 10:20 AM</p>
            </div>
            <div className='isi-selamat'>
              <div className='ulang'>
                <h1>Nilai</h1>
                <p>100</p>
              </div>
              <div className='nilai-selamat'>
                <h1>Soal</h1>
                <p>10</p>
              </div>
              <div className='nilai-selamat'>
                <h1>Benar</h1>
                <div className='icon-benar'>
                  <img src="../src/assets/iconselamat.svg" alt="benar" 
                  style={{height:'24px', width:'24px'}} />
                  <p>10</p>
                </div>
              </div>
              <div className='nilai-selamat'>
                <h1>Salah</h1>
                <div className='icon-benar'>
                  <img src="../src/assets/iconselamat2.svg" alt="benar" 
                  style={{height:'23px', width:'23px'}}/>
                  <p>0</p>
                </div>
              </div>
            </div>
            <div className='footer-selamat'>
              <h1>Selesai!</h1>
              <p>Pretest sudah selesai dan kami sudah mengetahui progresmu. <br /><br />
              Saatnya memulai kelas!</p>
              <button className='btn-ulangi'>
                <img src="../src/assets/ulang.svg" alt="" />
                <p>Ulangi Quiz</p>
              </button>
            </div>
          </form>
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
  )
}

export default Cobakembali
