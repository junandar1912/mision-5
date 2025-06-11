import React, { useState } from 'react';
import Header from '../../components/Header/Header.jsx';
import { useNavigate } from 'react-router-dom';
import Datastore from '../../Datastore.js';
import './Registrasi.css';
import axios from 'axios';

const Registrasi = () => {
   const [nama, setNama] = useState('');
   const [Email, setEmail] = useState('');
   const [nomor, setNomor] = useState('');
   const [password, setPassword] = useState('');
   const [konfirmasi, setKonfirmasi] = useState('');
   const [showPassword, setShowPassword] = useState(false);
   const [showKonfirmasi, setShowKonfirmasi] = useState(false);
   const [errorMessage, setErrorMessage] = useState('');
   const navigate = useNavigate();
   const { setUser } = Datastore();  // Zustand store

   const handleSubmit = async (e) => {
      e.preventDefault();

      // Validasi input
      if (!nama || !nomor || !password || !konfirmasi || !Email) {
         setErrorMessage('Harap lengkapi semua kolom.');
         return;
      }
      if (password !== konfirmasi) {
         setErrorMessage('Konfirmasi password tidak cocok.');
         return;
      }

      // Data pengguna yang akan dikirim ke API
      const userData = { 
         name: nama, 
         Email: Email, 
         phone: nomor, 
         password: password 
      };

      try {
         // Kirim data pengguna ke MockAPI untuk registrasi
         const response = await axios.post('https://6849ce9545f4c0f5ee72e8de.mockapi.io/VIdeobelajar/users', userData);
         
         // Jika status 201 (berhasil)
         if (response.status === 201) {
            setUser(userData); // Set state global menggunakan Zustand
            localStorage.setItem('registrasiUser', JSON.stringify(userData)); // Simpan di localStorage
            alert('Registrasi berhasil! Silakan login.');
            navigate('/login');  // Arahkan pengguna ke halaman login
         } else {
            console.error('Error from API:', response);
            setErrorMessage('Registrasi gagal. Coba lagi nanti.');
         }
      } catch (error) {
         console.error('Error during registration:', error);
         setErrorMessage('Registrasi gagal. Coba lagi nanti.');
      }
   };

   return (
    <>
    <Header />
    <div className='body-regis'>
      <div className='main-regis'>
        <div className='tittle'>
          <p className='h11'>Pendaftaran Akun</p>
          <p className='p'>Yuk, daftarkan akunmu sekarang juga!</p>
        </div>
        <form action="my-form" onSubmit={handleSubmit}>
          <label htmlFor="nama">Nama Lengkap<span>*</span></label>
          <input type="text" id='nama' value={nama} onChange={(e) => setNama(e.target.value)} />
          <label htmlFor="Email">Email<span>*</span></label>
          <input type="email" id='Email' value={Email} onChange={(e) => setEmail(e.target.value)} />
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
            <input type="text" id='nomor' className='nomor' value={nomor} onChange={(e) => setNomor(e.target.value)} />
          </div>
          <div className='pass'>
            <div className='div-pas'>
              <label htmlFor="password">Password<span>*</span></label>
              <div className='password'>
                <input type={showPassword ? 'text' : 'password'} id='pass' value={password} onChange={(e) => setPassword(e.target.value)} />
                <span className='password-regis' onClick={() => setShowPassword(!showPassword)}>
                  <i className={`fas ${showPassword ? 'fa-eye' : 'fa-eye-slash'}`}></i>
                </span>
              </div>
            </div>
            <div className='div-konfir'>
              <label htmlFor="konfir">Konfirmasi Password<span>*</span></label>
              <div className='konfirmasi'>
                <input id='konfir' value={konfirmasi} onChange={(e) => setKonfirmasi(e.target.value)} type={showKonfirmasi ? 'text' : 'password'} />
                <span className='password-regis' onClick={() => setShowKonfirmasi(!showKonfirmasi)}>
                  <i className={`fas ${showKonfirmasi ? 'fa-eye' : 'fa-eye-slash'}`}></i>
                </span>
              </div>
            </div>
          </div>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
          <div className='tombol'>
            <button type='submit' className='daftar'>Daftar</button>
            <button type='button' className='masuk' onClick={() => navigate('/login')}>Masuk</button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default Registrasi;
