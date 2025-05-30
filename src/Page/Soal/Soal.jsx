import React, { useState } from 'react'
import TombolSoal from '../../components/Soal/Tombolsoal.jsx'
import Pertanyaan from '../../components/Soal/Pertanyaan.jsx'
import Daftarvideo from '../../components/Isipembelajaran/Daftarvideo.jsx';
import Headerprogres from '../../components/Isipembelajaran/Headerprogres.jsx'
import Footerp from '../../components/Isipembelajaran/FooterP.jsx'
import './Soal.css'

const dataSoal = [
  {
    nomor: 1,
    pertanyaan: 'Memikirkan dan mengantisipasi secara teliti adanya user secara tidak sengaja mengutak-atik konfigurasi, namun dapat diatasi dengan membuat default yang mengurangi kepanikan pada user adalah pengertian dari ...',
    opsi: [
      'Memikirkan tentang default *',
      'Memperitmbangkan page layout berdasarkan suatu tujuan tertentu',
      'Memastikan bahwa sistem berjalan sesuai dengan apa yang terjadi saat itu juga',
      'Menciptakan konsistensi dan menggunakan elemen UI umum'
    ],
  },
  {
    nomor: 2,
    pertanyaan: 'Memikirkan dan mengantisipasi secara teliti adanya user secara tidak sengaja mengutak-atik konfigurasi, namun dapat diatasi dengan membuat default yang mengurangi kepanikan pada user adalah pengertian dari ...',
    opsi: [
      'Memikirkan tentang default *',
      'Memperitmbangkan page layout berdasarkan suatu tujuan tertentu',
      'Memastikan bahwa sistem berjalan sesuai dengan apa yang terjadi saat itu juga',
      'Menciptakan konsistensi dan menggunakan elemen UI umum'
    ],
    
  },
   {
    nomor: 3,
    pertanyaan: 'Memikirkan dan mengantisipasi secara teliti adanya user secara tidak sengaja mengutak-atik konfigurasi, namun dapat diatasi dengan membuat default yang mengurangi kepanikan pada user adalah pengertian dari ...',
    opsi: [
      'Memikirkan tentang default *',
      'Memperitmbangkan page layout berdasarkan suatu tujuan tertentu',
      'Memastikan bahwa sistem berjalan sesuai dengan apa yang terjadi saat itu juga',
      'Menciptakan konsistensi dan menggunakan elemen UI umum'
    ],
    
  },
   {
    nomor: 4,
    pertanyaan: 'Memikirkan dan mengantisipasi secara teliti adanya user secara tidak sengaja mengutak-atik konfigurasi, namun dapat diatasi dengan membuat default yang mengurangi kepanikan pada user adalah pengertian dari ...',
    opsi: [
      'Memikirkan tentang default *',
      'Memperitmbangkan page layout berdasarkan suatu tujuan tertentu',
      'Memastikan bahwa sistem berjalan sesuai dengan apa yang terjadi saat itu juga',
      'Menciptakan konsistensi dan menggunakan elemen UI umum'
    ],
    
  },
   {
    nomor: 5,
    pertanyaan: 'Memikirkan dan mengantisipasi secara teliti adanya user secara tidak sengaja mengutak-atik konfigurasi, namun dapat diatasi dengan membuat default yang mengurangi kepanikan pada user adalah pengertian dari ...',
    opsi: [
      'Memikirkan tentang default *',
      'Memperitmbangkan page layout berdasarkan suatu tujuan tertentu',
      'Memastikan bahwa sistem berjalan sesuai dengan apa yang terjadi saat itu juga',
      'Menciptakan konsistensi dan menggunakan elemen UI umum'
    ],
    
  },
];

const Soal = () => {

  const [buttomAktif, setButtomAktif] = useState(null);
      const [buttomSelesai, setButtomSelesai] = useState([]);
      
      // Data tombol dummy agar Daftarvideo tidak error
      const dataButtom = [
        {
          id: 1,
          judul: 'Video Sample',
          waktu: '10 Menit',
          gambar: '../src/assets/file1.svg',
          titleDesc: 'Judul Sample',
          descriptionDesc: 'Deskripsi sample video',
          buttonDesc: 'Mulai',
        },
        {
          id: 2,
          judul: 'Video: Introduction to HR',
          waktu: '12 Menit',
          gambar: '../src/assets/Play_Circle.svg',
        },
        {
          id: 3,
          judul: 'Video: Introduction to HR',
          waktu: '12 Menit',
          gambar: '../src/assets/Play_Circle.svg',
        },
        {
          id: 4,
          judul: 'Video: Introduction to HR',
          waktu: '12 Menit',
          gambar: '../src/assets/Play_Circle.svg',
        },
        {
          id: 5,
          judul: 'Rangkuman: Introduction to HR',
          waktu: '12 Menit',
          gambar: '../src/assets/file1.svg',
        },
        {
          id: 6,
          judul: 'Quiz: Introduction to HR',
          waktu: '12 Menit',
          gambar: '../src/assets/file2.svg',
        }
      ];
  


  const [pageIndex, setPageIndex] = useState(0);

  const handlePrev = () => {
    if (pageIndex > 0) setPageIndex(pageIndex - 1);
  };

  const handleNext = (jawaban) => {
    console.log('Jawaban untuk soal', pageIndex + 1, ':', jawaban);
    if (pageIndex < dataSoal.length - 1) {
      setPageIndex(pageIndex + 1);
    } else {
      alert('Selesai kuis!');
    }
  };


  return (
    <>
    <Headerprogres/>
    <main className='body1'>
      <div className='container-soal'>
        <div className='soal11'>
          <TombolSoal/>
        </div>
        <div className='soal13'>
          <Pertanyaan
            page={dataSoal[pageIndex]}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        </div>
        <div className='soal12'>
          <Daftarvideo
          dataButtom={dataButtom}
          buttomAktif={buttomAktif}
          setButtomAktif={setButtomAktif}
          buttomSelesai={buttomSelesai}
          setButtomSelesai={setButtomSelesai}
          />
        </div>
      </div>
    </main>
    <Footerp/>
    </>
  )
}



export default Soal
