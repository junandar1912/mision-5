import React from 'react'
import './Cardpesanan.css'

const Cardpesanan = ({kode, waktu, judul, harga}) => {
  return (
    <main className='container-cardpesanan'>
      <div className='header-card'>
        <div className='isi-header'>
            <h2>NO. Invoice: <span className='kode-p'>{ kode }</span></h2>
            <h2>Waktu Pembayaran: { waktu }</h2>
        </div>
        <span className='status-pesanan'>Berhasil</span>
      </div>
      <div className='main-card'>
        <div className='main-card1'>
            <img src="" alt="" style={{width:'52px', height:'52px', radius:'5px'}}/>
            <div className='judul-pesanan'>
                <h1>{ judul }</h1>
            </div>
        </div>
        <span className='vertical-divider'></span>
        <div className='label-harga'>
            <label htmlFor="">Harga</label>
            <p className='harga'>{ harga }</p>
        </div>
      </div>
      <div className='footer-card'>
        <h1 className='total'>Total Pembayaran</h1>
        <p className='harga'>{ harga }</p>
      </div>
    </main>
  )
}

export default Cardpesanan
