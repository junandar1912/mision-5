import React, { useState } from 'react';
import Datastore from '../../Datastore';
import './Cardprofil.css'; // kamu bisa sesuaikan CSS-nya

const Cardprofile = () => {
  const { user, updateUser } = Datastore();

  const [name, setName] = useState(user?.name || '');
  const [Email, setEmail] = useState(user?.Email || '');
  const [phone, setPhone] = useState(user?.phone || '');

  const handleSave = () => {
    updateUser({ name, Email, phone });
    alert('Profil berhasil disimpan!');
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img
          src="../src/assets/gambar/avatar/avatar(1).svg" 
          alt="Foto Profil"
          className="profile-picture"
        />
        <div className="profile-info">
          <h2>{user?.name || 'Nama Pengguna'}</h2>
          <p>{user?.Email || 'email@contoh.com'}</p>
          <span className="ganti-foto">Ganti Foto Profil</span>
        </div>
      </div>

      <hr />

      <div className="profile-form">
        <label>Nama Lengkap</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>E-Mail</label>
        <input
          type="email"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>No. HP</label>
        <div className="phone-input">
          <span className="kode">+62</span>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <button className="btn-simpan" onClick={handleSave}>
          Simpan
        </button>
      </div>
    </div>
  );
};

export default Cardprofile;

