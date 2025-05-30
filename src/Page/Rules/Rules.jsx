import React, { useEffect, useState } from 'react'
import Headerprogres from '../../components/Isipembelajaran/Headerprogres.jsx'
import Footerp from '../../components/Isipembelajaran/FooterP.jsx'
import Daftarvideo from '../../components/Isipembelajaran/Daftarvideo.jsx'
import './Rules.css'

const Rules = () => {
  // Data tombol dibuat langsung di sini
  const dataButtom = [
    {
      id: 1,
      judul: 'Video: Introduction to HR',
      waktu: '12 Menit',
      gambar: '../src/assets/file1.svg',
      titleDesc: 'Aturan',
      descriptionDesc: `Kerjakan pretest dengan sebaik mungkin untuk mengukur pemahaman awalmu terkait materi yang akan kamu pelajari
Syarat Nilai Kelulusan: -

Durasi Ujian: 5 Menit

Jangan khawatir, total skor tidak akan memengaruhi kelulusan dan penilaian akhirmu dalam rangkaian kelas ini`,
      buttonDesc: 'Mulai Pre-test',
    },
    {
      id: 2,
      judul: 'Video: Introduction to HR',
      waktu: '12 Menit',
      gambar: '../src/assets/Play_Circle.svg',
      path: '/Pembelajaran',
      titleDesc: '',
      descriptionDesc: '',
      buttonDesc: '',
      checked:'true'
    },
    {
      id: 3,
      judul: 'Video: Introduction to HR',
      waktu: '12 Menit',
      gambar: '../src/assets/Play_Circle.svg',
      path: '/Pembelajaran',
      titleDesc: '',
      descriptionDesc: '',
      buttonDesc: '',
    },
    {
      id: 4,
      judul: 'Video: Introduction to HR',
      waktu: '12 Menit',
      gambar: '../src/assets/Play_Circle.svg',
      onClick: '/Pembelajaran',
      titleDesc: '',
      descriptionDesc: '',
      buttonDesc: '',
    },
    {
      id: 5,
      judul: 'Rangkuman: Introduction to HR',
      waktu: '12 Menit',
      gambar: '../src/assets/file1.svg',
      titleDesc: 'Aturan',
      buttonDesc: 'Mulai ujian Akhir',
      descriptionDesc: `Kerjakan ujian akhir dengan sebaik mungkin untuk mengukur pemahamanmu terkait seluruh materi yang telah kamu pelajari

Syarat Nilai Kelulusan: 60%

Kerjakan dengan sebaik mungkin untuk mencapai skor minimal agar kamu bisa mendapatkan sertifikat kelulusan kelas`,
    },
    {
      id: 6,
      judul: 'Quiz: Introduction to HR',
      waktu: '12 Menit',
      gambar: '../src/assets/file2.svg',
      titleDesc: 'Aturan',
      descriptionDesc: `Kerjakan quiz dengan sebaik mungkin untuk mengukur pemahaman terkait materi yang telah kamu pelajari

Syarat Nilai Kelulusan: 60%

Kerjakan dengan sebaik mungkin untuk mencapai skor minimal agar kamu dapat melanjutkan ke modul berikutnya`,
      buttonDesc: 'Mulai Quiz',
    },
  ]

  const [buttomAktif, setButtomAktif] = useState(1)
  const [buttomSelesai, setButtomSelesai] = useState([1,2])
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [buttonText, setButtonText] = useState('')

  useEffect(() => {
    // Update deskripsi sesuai buttomAktif
    const btnData = dataButtom.find((item) => item.id === buttomAktif)
    if (btnData) {
      setTitle(btnData.titleDesc || '')
      setDescription(btnData.descriptionDesc || '')
      setButtonText(btnData.buttonDesc || '')
    } else {
      setTitle('')
      setDescription('')
      setButtonText('')
    }
  }, [buttomAktif])

  // Fungsi ini juga bisa dipakai untuk update deskripsi secara manual dari Daftarvideo
  const handleChangeDesc = (newTitle, newDesc, newButtonText) => {
    setTitle(newTitle)
    setDescription(newDesc)
    setButtonText(newButtonText)
  }

  

  return (
    <>
      <Headerprogres />
      <main className='body1'>
        <div className='cont-play'>
          <img
            src='../src/assets/Rules.svg'
            alt='video'
            style={{ width: '100%', height: '505px' }}
          />
          <div className='card-playvideo'>
            <div className='title-play'>
              <h1>{title}</h1>
              <p>{description}</p>
              <br />
              <button className='btn-rules'>{buttonText}</button>
            </div>
          </div>
        </div>

        <Daftarvideo
          dataButtom={dataButtom}
          buttomAktif={buttomAktif}
          setButtomAktif={setButtomAktif}
          buttomSelesai={buttomSelesai}
          setButtomSelesai={setButtomSelesai}
          onChangeDesc={handleChangeDesc}
        />
      </main>
      <Footerp />
    </>
  )
}

export default Rules
