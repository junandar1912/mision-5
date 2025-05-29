import React from 'react'
import './Buttom.css'



const Buttom = ({judul, waktu, gambar}) => {
  return (
    <main className='buttom'>
      <div className='btn-container12'>
        <img src={ gambar } alt="" />
        <p className='p-bayar'>{ judul }</p>
      </div>
      <p className='p-bayar'>{ waktu }</p>
    </main>
  )
}
export default Buttom
