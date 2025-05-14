import React from 'react'
import Headerselesai from '../../components/Header/Headerselesai.jsx'
import './Selesai.css'

const Selesai = () => {
  return (
    <>
      <Headerselesai/>
      <main className='body-selesai'>
        <div className='container-selesai'>
          <img src="../src/assets/online-shopping-female 1.svg" alt="detail pesanan" className='img-notif'/>
          <div className='p-selesai'>
            <h1 className='title-selesai'>Pembayaran Berhasil!</h1>
            <p className=''>Silakan cek email kamu untuk informasi lebih lanjut. Hubungi kami jika ada kendala.</p>
            <button className='lihat-detail'>Lihat Detail Pesanan</button>
          </div>
        </div>
      </main>
    </>
  )
}

export default Selesai
