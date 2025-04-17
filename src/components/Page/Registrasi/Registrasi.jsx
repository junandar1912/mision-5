import React from 'react'
import Header from '../../Header/Header'
import './Registrasi.css'

const Registrasi = () => {
  return (
    <>
    <Header/>
    <div className='body'>
      <div className='main'>
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
              <select name='phone' id='nomor'>
                <option value="+62">+62</option>
              </select>
            </div>
            <input type="text" id='nomor'/>
          </div>
          <div className='pass'>
            <label htmlFor="password">Password<span>*</span></label>
            <input type="password" id='pass'/>
            <span className="password-toggle-icon"><i className="fas fa-eye-slash"></i></span>
            <label htmlFor="konfir">Konfirmasi Password<span>*</span></label>
            <input type="password" id='konfir'/>
            <span className='icon-toogle'><i className='fas fa-eye-slash'></i></span>
          </div>
          <div className='tombol'>
            <button type='submit' className='daftar'>Daftar</button>
            <button type='submit' className='masuk'>Masuk</button>
          </div>
        </form>
        <div className='divider'><span>atau</span></div>
        <button className='btn-g' type='submit'>
          <div className='btn'>
            <img src="./src/assets/gambar/logos_google-icon.svg" alt="btn-g" />
            <p className='titel'>Masuk dengan google</p>
          </div>
        </button>
      </div>
    </div>
    </>
  )
}

export default Registrasi
