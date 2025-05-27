import React from 'react'

const Kelassaya = () => {
  return (
    <div>
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
    </div>
  )
}

export default Kelassaya
