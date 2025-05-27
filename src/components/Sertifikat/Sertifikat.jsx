import React from 'react'
import './Sertifikat.css'

const Sertifikat = ({avatar, instructor, job}) => {
  return (
    <main className="card-sertifikat">
      <img src="../src/assets/sertifikat.svg" alt="sertifikat" style={{width: '100%'}}/>
      <div className='isi-container'>
        <div className='course-instructor'>
          <img src={avatar} alt={instructor} className="instructor-avatar" />
          <div className='course-profil'>
            <p className="instructor-name">{instructor}</p>
            <div className='flex-row'>
              <p className='instructor-job'>{job}</p>
            </div>
          </div>
        </div>
        <button className="download-btn">Download Sertifikat</button>
      </div>  
    </main>
  )
}

export default Sertifikat
