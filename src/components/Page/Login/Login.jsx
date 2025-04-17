import React from 'react'
import Header from '../../Header/Header.jsx'
import './Login.css'

const Login = () => {
  return (
    <>
    <Header/>
    <div className='body'>
      <div className='container'>
        <div className='tittle'>
          <p className='h1'>Masuk ke akun</p>
          <p className='ke-2'>Yuk, lanjutin belajarmu di videobelajar.</p>
        </div>
        <form className="my-form">
          <label htmlFor="e-mail">E-mail<span>*</span></label>
          <input type="text"/>
          <label htmlFor="password">Kata Sandi<span>*</span></label>
          <input type="password" />
          <a href="http://">Lupa Password?</a>
        <div className='tombol'>
          <button type='submit' className='masuk'>Masuk</button>
          <button type='submit' className='daftar'>Daftar</button>
        </div>
        </form>
        <span className='divider' ><p>atau</p></span>
        <button className='google' type='submit'>
          <div className='isi'>
           <img src="./src/assets/gambar/logos_google-icon.svg" alt="button" className='btn-g'/>
           <p>Masuk dengan Google</p>
          </div>
        </button>
      </div>
    </div>
    </>
  )
}

export default Login
