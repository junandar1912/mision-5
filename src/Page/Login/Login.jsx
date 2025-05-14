import React, { useState } from 'react';
import Header from '../../components/Header/Header.jsx';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

import './Login.css'





const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  

  const handleLogin = () => {
    if (email && password) {
      localStorage.setItem('userName', email);
      window.location.href = '/'; //link
    } else {
      alert('Tolong periksa kembali email dan kata sandi Anda.');
    }
  };


  const navigate = useNavigate();

  const handleDaftar = () => {
  navigate('/registrasi');
};

  return (
    <>
    <Header/>
    <div className='login-body'>
      <div className='container-login'>
        <div className='tittle'>
          <p className='h1'>Masuk ke akun</p>
          <p className='ke-2'>Yuk, lanjutin belajarmu di videobelajar.</p>
        </div>
        <form className="my-form" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="e-mail">E-mail<span>*</span></label>
          <input type="text" id='Email'  value={email} onChange={(e) => setEmail(e.target.value)}/>
          <label htmlFor="password">Kata Sandi<span>*</span></label>
          <div className='Login password'>
            <input type={showPassword ? 'text' : 'password'} id='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            <span className='icon-toogle' onClick={() => setShowPassword(!showPassword)}>
              <i className={`fas ${showPassword ? 'fa-eye' : 'fa-eye-slash'}`}></i>
              </span>
          </div>
          <a href="http://">Lupa Password?</a>
        <div className='tombol'>
           <button type='button' className='masuk' onClick={handleLogin}>Masuk</button>
           <button type='button' className='daftar' onClick={handleDaftar}>Daftar</button>
        </div>
        </form>
        <span className='divider' ><p className='p-atau'>atau</p></span>
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
