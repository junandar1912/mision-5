import React, { useState } from 'react'
import Headerprogres from '../../components/Isipembelajaran/Headerprogres.jsx'
import Footerp from '../../components/Isipembelajaran/FooterP.jsx'
import Daftarvideo from '../../components/Isipembelajaran/Daftarvideo.jsx'
import './Rules.css'

const Rules = () => {

  const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  const [buttonText, setButtonText] = useState()

  // Fungsi ini untuk update deskripsi dari tombol di Daftarvideo
  const handleChangeDesc = (newTitle, newDesc, newButtonText) => {
    setTitle(newTitle)
    setDescription(newDesc)
    setButtonText(newButtonText)
  }

  
  return (
    <>
     <Headerprogres/>
     <main className='body1'>
        <div className='cont-play'>
          <img src="../src/assets/Rules.svg" alt="video" style={{ width: '100%', height: '505px' }} />
          <div className='card-playvideo'>
            <div className='title-play'>
              <h1>{ title }</h1>
              <p>{ description }</p>
                <br />
               <button className='btn-rules'>{ buttonText }</button>
            </div>
          </div>
        </div>
        <Daftarvideo onChangeDesc={ handleChangeDesc } />
     </main>
     <Footerp/> 
    </>
  )
}

export default Rules
