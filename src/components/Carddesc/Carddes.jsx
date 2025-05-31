import React from 'react'
import { useNavigate } from 'react-router'
import './Carddesc.css'


const Carddes = ({perlihatkan, Harga, Diskon, Count, gambar, terlihat}) => {

  const navigate = useNavigate()

  return (
      <div className='desc-button'>
          <div className='t-produk'>
            {terlihat &&<img src={ gambar } className='image-desc-card' />}
            <p className='p-button'>Gapai Karier Impianmu<br/> sebagai Seorang UI/UX Designer & Product Manager.</p>
            <div className='t2-button'>
              <div className='diskon'>
                <p className='price-detail'>{ Harga }</p>
                <p className='d-review-count'>{ Diskon }</p>
              </div>
              <p className='d-discont'>{ Count }</p>
            </div>
            <p className='p2-button'>Penawaran spesial tersisa 2 hari lagi!</p>
          </div>
          {perlihatkan && <button className='button-produk' onClick={()=> navigate('/Bayar')}>Beli Sekarang</button>}
          <div className='isi-card'>
            <p className='t-isi'>Kelas Ini Sudah Termasuk</p>
            <div className='isi-kartu'>
              <ul className='ujian'>
                <li className='daftar-ujian'>
                  <img src="../src/assets/File_Check.svg" alt="" className='img-ujian'/>
                  <p className='p-ujian'>Ujian Akhir</p>
                </li>
                <li className='daftar-ujian'>
                  <img src="../src/assets/book-2.svg" alt="" className='img-ujian'/>
                  <p className='p-ujian'>7 Dokumen</p>
                </li>
                <li className='daftar-ujian'>
                   <img src="../src/assets/File_Edit.svg" alt="" className='img-ujian'/>
                   <p className='p-ujian'>Preset</p>
                </li>
              </ul>
              <ul className='sertifikat'>
                <li className='daftar-sertifikat'>
                  <img src="../src/assets/video.svg" alt="" className='img-ujian'/>
                  <p className='p-ujian'>49 Video</p>
                </li>
                <li className='daftar-sertifikat'>
                  <img src="../src/assets/file-certificate.svg" alt="" className='img-ujian'/>
                  <p className='p-ujian'>Sertifikat</p>
                </li>
              </ul>
            </div>
            <div className='bahasa'>
                <p className='p-bahasa'>Bahasa Pengantar</p>
                <div className='daftar-sertifikat'>
                  <img src="../src/assets/world.svg" alt="" />
                  <p className='p-ujian'>Bahasa Indonesia</p>
                </div>
            </div>
          </div>
        </div>
  )
}

export default Carddes
