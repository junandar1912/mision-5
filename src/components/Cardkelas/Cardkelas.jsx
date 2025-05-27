import React from 'react'
import './Cardkelas.css'


const Cardkelas = ({progres, modul, image, guru, namaguru, judul, deks, posisi, angka, durasi}) => {
  
    



  return (
    <main className='container-cardkelas'>
      <div className='header-cardkelas'>
        <h4>{ modul } Modul Terlesaikan</h4>
        <span className='progres'></span>
      </div>
      <form className='card-kelas'>
        <img src={ image } alt="" style={{height: '172px', width: '172px', borderRadius:'10px'}}/>
        <div className='name-kelas'>
            <h3>{ judul }</h3>
            <p> { deks } </p>
            <div className='flex-row gap-2.5'>
                <img src={ guru } alt="" style={{height:'40px', width:'40px', borderRadius:'10px'}}/>
                <div className='flex-col gap-2.5'>
                    <h1 className='instructur-name'>{ namaguru } </h1>
                    <p className='instructur-job'>{ posisi }</p>
                </div>
            </div>
            <div className='isi-kelas'>
                <img src="" alt="" />
                <p>{ angka } Modul</p>
                <img src="" alt="" />
                <p>{ durasi } Menit</p>
            </div>
        </div>
      </form>
      <div className='footer-kelas'>
        <div className='progres'>
            <div className='deks-progres'>
                <p>Progres Kelas :</p>
                <h1>{ progres }</h1>
            </div>
            <span className='divider'></span>
        </div>
        <div className='flex-row gap-2.5 w-auto'>
            <button>Unduh Sertifikat</button>
            <button>Lihat Detail Kelas</button>
        </div>
      </div>
    </main>
  )
}

export default Cardkelas
