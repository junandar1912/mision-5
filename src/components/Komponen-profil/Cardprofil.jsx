import React, { useRef, useState } from 'react';
import Datastore from '../../Datastore';
import './Cardprofil.css'; // kamu bisa sesuaikan CSS-nya

const Cardprofile = () => {
  const { user, updateUser } = Datastore();

  const [name, setName] = useState(user?.name || '');
  const [Email, setEmail] = useState(user?.Email || '');
  const [phone, setPhone] = useState(user?.phone || '');
  const [photo, setPhoto] = useState(user?.photo || '')
  const fileInputRef = useRef(null)

  const handleSave = () => {
    updateUser({ name, Email, phone, photo });
    alert('Profil berhasil disimpan!');
  };

  const handleChangePhotoClick = () => { // untuk ganti photo
    fileInputRef.current.click();
  };


   const handleFileChange = (e) => { // input photo
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPhoto(reader.result); // base64 string foto
      };
      reader.readAsDataURL(file);
    }
  };


  return (
    <div className="profile-container">
      <div className="profile-header">
        <img
          src={ photo || "../src/assets/gambar/avatar/avatar(1).svg"} 
          alt="Foto Profil"
          className="profile-picture"
        />
        <div className="profile-info">
          <h2 className='p1card'>{user?.name || 'Nama Pengguna'}</h2>
          <p className='p2card'>{user?.Email || 'email@contoh.com'}</p>
          <span className="ganti-foto" onClick={handleChangePhotoClick}>Ganti Foto Profil</span>
          <input type="file" accept="image/*" style={{ display: 'none' }} ref={fileInputRef} onChange={handleFileChange} />
        </div>
      </div>
      <span className='divider'></span>
      <main className="profile-form">
        <div className='nama-lengkap'>
          <label className='block'>Nama Lengkap</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Nama Lengkap'/>
        </div>
        <div className='nama lengkap'>
          <label className='block'>E-Mail</label>
          <input type="email" value={Email} onChange={(e) => setEmail(e.target.value)} placeholder='E-mail'/>
        </div>
        <div className="phone-input">
           <select className="kode">
              <option value="">+62</option>
           </select>
          <div className='nomor-input'>
            <label className='block'>No. HP</label>
            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='NO. HP'/>
          </div>
        </div>
      </main>
      <button className="btn-simpan" onClick={handleSave}>Simpan</button>
    </div>
  );
};

export default Cardprofile;

