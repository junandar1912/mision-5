import React from 'react'
import Card from '../../components/Card/Card'
import Headerprofile from '../../components/Header/Headerprofil'
import Footer from '../../components/Footer/Footer'
import './Detail.css'



const Detail = () => {
  return (
    <>
    <Headerprofile/>
    <div className='body'>
      <div className='Breadcrumb'>
        <a href="" className='link-Detail'>Beranda</a>
        <span className='d-span'>/</span>
        <a href="" className='link-Detail'>Desain</a>
        <span className='d-span'>/</span>
        <p className='p-produk-header'>Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product Manager.</p>
      </div>
      <div className='titel-produk'>
        <h1 className='p-produk'>Gapai Karier Impianmu sebagai Seorang<br/> UI/UX Designer & Product Manager.</h1>
        <p className='p2-produk'>Belajar bersama tutor profesional di Video Course.<br/> 
        Kapanpun, di manapun.</p>
        <img src="../src/assets/rating.svg" alt="" className='img-produk'/>
      </div>
      <main className='produk-main'>
        <div className='desc-button'>
          <div className='t-produk'>
            <p className='p-button'>Gapai Karier Impianmu <br/> sebagai Seorang UI/UX Designer & Product Manager.</p>
            <div className='t2-button'>
              <div className='diskon'>
                <p className='price-detail'>Rp 500K</p>
                <p className='d-review-count'>Rp 250K</p>
              </div>
              <p className='d-discont'>Diskon 50%</p>
            </div>
            <p className='p2-button'>Penawaran spesial tersisa 2 hari lagi!</p>
          </div>
          <button className='button-produk'>Beli Sekarang</button>
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
        <div className='desc-produk'>
          <div className='head-desc'>
            <p className='t-p-head'>Deskripsi</p>
            <p className='p-desc-produk'>Foundations of User Experience (UX) Design adalah yang pertama dari rangkaian tujuh kursus yang akan membekali Anda dengan keterampilan yang dibutuhkan untuk melamar pekerjaan tingkat pemula dalam desain pengalaman pengguna. Desainer UX fokus pada interaksi yang dilakukan orang dengan produk seperti situs web, aplikasi seluler, dan objek fisik. Desainer UX membuat interaksi sehari-hari itu dapat digunakan, menyenangkan, dan dapat diakses. Peran seorang desainer UX tingkat pemula mungkin termasuk berempati dengan pengguna, menentukan poin rasa sakit mereka, memunculkan ide untuk solusi desain, membuat wireframe, prototipe, dan maket, dan menguji desain untuk mendapatkan umpan balik.</p>
          </div>
          <div className='desc-profil'>
            <p className='t-p-head'>Belajar bersama Tutor Profesional</p>
            <div className='p1-desc-propil'></div>
          </div>
        </div>
      </main>
      <div className='footer-produk'></div>
    </div>
    <Footer/>
    </>
  )
}

export default Detail
