import React, { useState } from 'react'
import Header from '../../components/Header/Header.jsx'
import { useNavigate } from 'react-router-dom';
import Datastore from '../../Datastore.js';
import './Registrasi.css'


const Registrasi = () => {
   const [nama, setNama] = useState('');
   const [Email, setEmail]= useState('')
   const [nomor, setNomor] = useState('');
   const [password, setPassword] = useState('');
   const [konfirmasi, setKonfirmasi] = useState('');
   const [showPassword, setShowPassword] = useState(false);
   const [showKonfirmasi, setShowKonfirmasi] = useState(false);
   const navigate = useNavigate();
   const { setUser } = Datastore();

   const handleSubmit = (e) => {
      e.preventDefault();

      if (!nama || !nomor || !password || !konfirmasi || !Email) {
        alert('Harap lengkapi semua kolom.');
        return;
      }
      if (password !== konfirmasi) {
        alert('Konfirmasi password tidak cocok.');
        return;
      }

      const userData = { name: nama, Email: Email, phone: nomor, password: password };
      localStorage.setItem('registrasiUser', JSON.stringify(userData)); // sudah benar
      setUser(userData);
      alert('Registrasi berhasil! Silakan login.');
      navigate('/login');
   };

   const handleMasukGoogle = () => {
      alert('Fitur login dengan Google belum tersedia.');
   };

   const handleMasuk = () => {
      navigate('/login');
   };

   return (
    <>
    <Header/>
    <div className='body-regis'>
      <div className='main-regis'>
        <div className='tittle'>
          <p className='h11'>Pendaftaran Akun</p>
          <p className='p'>Yuk, daftarkan akunmu sekarang juga!</p>
        </div>
        <form action="my-form" onSubmit={handleSubmit}>
          <label htmlFor="nama">Nama Lengkap<span>*</span></label>
          <input type="text" id='nama' value={nama} onChange={(e) => setNama(e.target.value)}/>
          <label htmlFor="Email">Email<span>*</span></label>
          <input type="text" id='Email' value={Email} onChange={(e) => setEmail(e.target.value)}/>
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
            <input type="text" id='nomor' className='nomor' value={nomor} onChange={(e) => setNomor(e.target.value)}/>
          </div>
          <div className='pass'>
            <div className='div-pas'>
              <label htmlFor="password">Password<span>*</span></label>
              <div className='password'>
                <input  type={showPassword ? 'text' : 'password'} id='pass' value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
                <span className='password-regis' onClick={() => setShowPassword(!showPassword)}>
                  <i className={`fas ${showPassword ? 'fa-eye' : 'fa-eye-slash'}`}></i>
                  </span>
              </div>
            </div>
            <div className='div-konfir'>
              <label htmlFor="konfir">Konfirmasi Password<span>*</span></label>
              <div className='konfirmasi'>
                <input id='konfir' value={konfirmasi}
                    onChange={(e) => setKonfirmasi(e.target.value)}  type={showKonfirmasi ? 'text' : 'password'}/>
                <span className='password-regis'
                    onClick={() => setShowKonfirmasi(!showKonfirmasi)}>
                  <i className={`fas ${showKonfirmasi ? 'fa-eye' : 'fa-eye-slash'}`}></i>
                  </span>
              </div>
            </div>
          </div>
          <div className='tombol'>
            <button type='submit' className='daftar'>Daftar</button>
            <button type='button' className='masuk' onClick={handleMasuk}>Masuk</button>
          </div>
        </form>
        <div className='divider'><span className='p-span'>atau</span></div>
        <button className='btn-g' type='button' onClick={handleMasukGoogle}>
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
