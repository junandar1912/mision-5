import React from 'react'
import Headerprogres from '../../components/Isipembelajaran/Headerprogres.jsx'
import Footerp from '../../components/Isipembelajaran/FooterP.jsx'
import Daftarvideo from '../../components/Isipembelajaran/Daftarvideo.jsx'
import Radio from '../../components/Radio/Radio.jsx'

const Selamat = () => {
  return (
    <>
     <Headerprogres />
     <main>
        <div>
          <img src="../src/assets/selamat.svg" alt="" />
          <div>
            <div className='titel-selamat'>
              <h1>Tanggal Pretest: </h1>
              <p>23 September 2022, 10:20 AM</p>
            </div>
            <div className='isi-selamat'>
              <div>
                <h1>Nial</h1>
                <p>100</p>
              </div>
              <div>
                <h1>Soal</h1>
                <p>0</p>
              </div>
              <div>
                <h1>Benar</h1>
                <div>
                  <p>10</p>
                </div>
              </div>
              <div>
                <h1>Salah</h1>
                <div>
                  <p>0</p>
                </div>
              </div>
            </div>
            <div className='footer-selamat'>
              <h1>Selesai!</h1>
              <p>Pretest sudah selesai dan kami sudah mengetahui progresmu. <br /><br />
              Saatnya memulai kelas!</p>
            </div>
          </div>
        </div>
        <Daftarvideo/>
     </main>
     <Footerp /> 
    </>
  )
}

export default Selamat
