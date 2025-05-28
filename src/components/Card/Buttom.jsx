import React from 'react'

const Buttom = ({judul, waktu, gambar}) => {
  return (
    <main className='buttom'>
      <div className='btn-container'>
        <img src={ gambar } alt="" />
        <p>{ judul }</p>
      </div>
      <p>{ waktu }</p>
    </main>
  )
}
export default Buttom
