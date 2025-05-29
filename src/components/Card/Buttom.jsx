import React from 'react'
import Switch from '../../components/Switch/Switch.jsx'
import './Buttom.css'
import { useNavigate } from 'react-router-dom'



const Buttom = ({judul, waktu, gambar, selesai, onToggleSelesai, path }) => {

  const navigete = useNavigate()



  return (
    <main className='buttom'>
      <div className='btn-container12' onClick={() => navigete( path )}>
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
