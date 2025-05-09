import React from 'react'
import Header from '../../components/Header/Header.jsx'
import './Registrasi.css'


const Registrasi = () => {


  



  return (
    <>
    <Header/>
    <div className='body-regis'>
      <div className='main-regis'>
        <div className='tittle'>
          <p className='h1'>Pendaftaran Akun</p>
          <p className='p'>Yuk, daftarkan akunmu sekarang juga!</p>
        </div>
        <form action="my-form">
          <label htmlFor="nama">Nama Lengkap<span>*</span></label>
          <input type="text" id='nama' />
          <div className='no'>
            <label htmlFor="nomor">NO. HP<span>*</span></label>
          </div>
          <div className='selection'>
            <div className='flag'>
              <img src="../src/assets/gambar/indonesia (ID).svg" alt="" />
              <select name='phone' id='nomor' className='page-no'>
                <option value="+62">+62</option>
              </select>
            </div>
            <input type="text" id='nomor' className='nomor'/>
          </div>
          <div className='pass'>
            <div className='div-pas'>
              <label htmlFor="password">Password<span>*</span></label>
              <div className='password'>
                <input type="password" id='pass'/>
                <span className="password-regis"><i className="fas fa-eye-slash"></i></span>
              </div>
            </div>
            <div className='div-konfir'>
              <label htmlFor="konfir">Konfirmasi Password<span>*</span></label>
              <div className='konfirmasi'>
                <input type="password" id='konfir'/>
                <span className='password-regis'><i className='fas fa-eye-slash'></i></span>
              </div>
            </div>
          </div>
          <div className='tombol'>
            <button type='submit' className='daftar'>Daftar</button>
            <button type='submit' className='masuk'>Masuk</button>
          </div>
        </form>
        <div className='divider'><span className='p-span'>atau</span></div>
        <button className='btn-g' type='submit'>
          <div className='btn'>
            <img src="./src/assets/gambar/logos_google-icon.svg" alt="btn-g" className='i-google'/>
            <p className='titel'>Masuk dengan google</p>
          </div>
        </button>
      </div>
    </div>
    </>
  )
}

export default Registrasi
