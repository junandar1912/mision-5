import React from 'react'
import Switch from '../../components/Switch/Switch.jsx'
import './Buttom.css'
import { useNavigate } from 'react-router-dom'



const Buttom = ({judul, waktu, gambar, selesai, onToggleSelesai, path, titleDesc,
  descriptionDesc, buttonDesc, onClick, id // state yang ingin di lakukan di buttom
 }) => {

  const navigate = useNavigate(); // state navigai


  const handleClick = () => {
    if(onClick) { // perintah menjalankan paragraf
      onClick({ titleDesc, descriptionDesc, buttonDesc }); 
    }
    if(path) { // perintah navigasi
      navigate(path);
    }
  };


  return (
    <main className='buttom' id={`btn-${id}`}                 // id HTML supaya tombol jelas teridentifikasi
        onClick={handleClick}
        role="button"                   // agar aksesibilitas lebih baik
        tabIndex={0}                   // supaya bisa fokus keyboard
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') handleClick()
        }}>
      <div className='btn-container12' >
        {selesai ? (
          <Switch label="Selesai" onChange={onToggleSelesai} />
        ) : (
          <img src={gambar} alt="icon" />
        )}
        <p className='p-bayar'>{ judul }</p>
      </div>
      <p className='p-bayar'>{ waktu }</p>
    </main>
  )
}
export default Buttom
