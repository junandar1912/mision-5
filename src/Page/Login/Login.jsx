import React from 'react'
import Header from '../../components/Header/Header.jsx';
import './Login.css'

const Login = () => {
  return (
    <>
    <Header/>
    <div className='login-body'>
      <div className='container-login'>
        <div className='tittle'>
          <p className='h1'>Masuk ke akun</p>
          <p className='ke-2'>Yuk, lanjutin belajarmu di videobelajar.</p>
        </div>
        <form className="my-form">
          <label htmlFor="e-mail">E-mail<span>*</span></label>
          <input type="text"/>
          <label htmlFor="password">Kata Sandi<span>*</span></label>
          <input type="password" />
          <span className='icon-toogle'><i className='fas fa-eye-slash'></i></span>
          <a href="http://">Lupa Password?</a>
        <div className='tombol'>
          <button type='submit' className='masuk'>Masuk</button>
          <button type='submit' className='daftar'>Daftar</button>
        </div>
        </form>
        <span className='divider' ><p>atau</p></span>
        <button className='google' type='submit'>
          <div className='isi'>
           <img src="./src/assets/gambar/logos_google-icon.svg" alt="button" className='img-g'/>
           <p className='p-google'>Masuk dengan Google</p>
          </div>
        </button>
      </div>
    </div>
    </>
  )
}

export default Login
