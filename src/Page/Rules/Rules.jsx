import React from 'react'
import Headerprogres from '../../components/Isipembelajaran/Headerprogres.jsx'
import Footerp from '../../components/Isipembelajaran/FooterP.jsx'
import Daftarvideo from '../../components/Isipembelajaran/Daftarvideo.jsx'

const Rules = () => {

  



  return (
    <>
     <Headerprogres/>
     <main className='body1'>
        <div className='cont-play'>
          <img src="../src/assets/Rules.svg" alt="video" style={{ width: '100%', height: '505px' }} />
          <div className='card-playvideo'>
            <div className='title-play'>
              <h1>Aturan</h1>
              <p>Kerjakan pretest dengan sebaik mungkin untuk mengukur pemahaman awalmu terkait materi <br/> yang akan kamu pelajari <br />
              <br /><br />
                Syarat Nilai Kelulusan: <br />-Durasi Ujian: 5 Menit <br /><br />
                Jangan khawatir, total skor tidak akan memengaruhi kelulusan dan penilaian akhirmu dalam <br /> rangkaian kelas ini</p>
                <br />
               <button className='btn-rules'>Mulai Pre-test</button>
            </div>
          </div>
        </div>
        <Daftarvideo/>
     </main>
     <Footerp/> 
    </>
  )
}

export default Rules
