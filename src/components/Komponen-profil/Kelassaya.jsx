import React from 'react'
import Cardkelas from '../Cardkelas/Cardkelas'

const kelasData = [{
  progres: '100%',
  modul: '5',
  image: '../src/assets/kelas/kelas1.png',
  guru: '../src/assets/guru/guru1.png',
  namaguru: 'John Doe',
  judul: 'Belajar React dari Dasar',
  deks: 'Pelajari dasar-dasar React dengan mudah.',
  posisi: 'Instruktur Senior',
  angka: '5',
  durasi: '120'
}]



const Kelassaya = () => {


  

  return (
    <main className='container-pesanan'>
      <div className='navigator-kelas'>
        <div className='link-pesanan'>
          <a href="">Semua Pesanan</a>
          <a href="">Menunggu</a>
          <a href="">Berhasil</a>
          <a href="">Gagal</a>
        </div>
        <div className='filter-pesanan'>
          <input type="text" placeholder='Cari Kelas' className='pencarian'/>
          <img src="../src/assets/pencarian.svg" alt="pencarian" style={ {cursor: 'pointer'} }/>
        </div>
      </div>
      <ul>
        {kelasData.map((kelas, index) => (
          <li key={index}>
            <Cardkelas 
              progres={kelas.progres}
              modul={kelas.modul}
              image={kelas.image}
              guru={kelas.guru}
              namaguru={kelas.namaguru}
              judul={kelas.judul}
              deks={kelas.deks}
              posisi={kelas.posisi}
              angka={kelas.angka}
              durasi={kelas.durasi}
            />
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Kelassaya
