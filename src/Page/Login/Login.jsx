import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header.jsx';
import { useNavigate } from 'react-router-dom';
import Datastore from '../../Datastore.js';
import './Login.css';
import { getData } from '../../Api.js';

const Login = () => {
  const [Email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);

  const { setUser } = Datastore();
  const navigate = useNavigate();

  const validateEmail = (email) => /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA0-9]{2,6}$/.test(email);
  const validatePassword = (password) => password.length >= 6;

  const handleLogin = () => {
    if (!validateEmail(Email)) {
      setError('Email format is invalid.');
      return;
    }

    if (!validatePassword(password)) {
      setError('Password must be at least 6 characters.');
      return;
    }

    const savedUser = JSON.parse(localStorage.getItem('registrasiUser'));

    if (savedUser) {
      if (savedUser.Email === Email && savedUser.password === password) {
        setUser(savedUser); // Mengatur user ke Zustand
        navigate('/'); // Redirect to homepage
      } else {
        setError('Incorrect email or password!');
      }
    } else {
      setError('Account not found. Please register first.');
    }
  };

  const handleDaftar = () => {
    navigate('/registrasi');
  };

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        setPosts(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <div className='login-body'>
        <div className='container-login'>
          <div className='tittle'>
            <p className='h1'>Masuk ke akun</p>
            <p className='ke-2'>Yuk, lanjutin belajarmu di videobelajar.</p>
          </div>
          <form className="my-form" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="email">E-mail<span>*</span></label>
              <input
                type="email"
                id="Email"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="password">Kata Sandi<span>*</span></label>
              <div className='Login password'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className='icon-toogle' onClick={() => setShowPassword(!showPassword)}>
                  <i className={`fas ${showPassword ? 'fa-eye' : 'fa-eye-slash'}`}></i>
                </span>
              </div>
            </div>
            <a href="http://">Lupa Password?</a>
            {error && <div className="error-message">{error}</div>}
            <div className='tombol'>
              <button type='button' className='masuk' onClick={handleLogin}>Masuk</button>
              <button type='button' className='daftar' onClick={handleDaftar}>Daftar</button>
            </div>
          </form>
          <span className='divider'>
            <p className='p-atau'>atau</p>
          </span>
          <button className='google' type='submit'>
            <div className='isi'>
              <img src="./src/assets/gambar/logos_google-icon.svg" alt="Google" className='img-g' />
              <p className='p-google'>Masuk dengan Google</p>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
