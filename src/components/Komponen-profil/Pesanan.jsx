import React from 'react';
import Cardpesanan from '../Cardpesanan/Cardpesanan';
import './Pesanan.css';

const pesananData = [{
  kode: 'HEL/VI/10062023',
  waktu: '10 Juni 2023, 14.17',
  judul: 'Belajar Microsoft Office dan Google Workspace untuk Pemula',
  harga: 'RP 300.000'
}]



const Pesanan = () => {

   


  return (
    <div className='container-pesanan'>
      <div className='navigator-pesanan'>
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
        <select name="" id="" className='select-pesanan'>
          <option value="">Urutkan</option>
          <option value="">Termurah</option>
          <option value="">Termahal</option>
        </select>
      </div>
      <ul>
      {pesananData.map((item, index) => (
        <li key={index}>
          <Cardpesanan
          kode={item.kode}
          judul={item.judul}
          harga={item.harga}
          waktu={item.waktu}/>
        </li>
      ))}
      </ul>
    </div>
  )
}

export default Pesanan
