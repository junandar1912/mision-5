import React, { useState } from 'react'
import TombolSoal from '../../components/Soal/Tombolsoal.jsx'
import Pertanyaan from '../../components/Soal/Pertanyaan.jsx'

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
    pertanyaan: 'Pertanyaan contoh nomor 2?',
    opsi: [
      'Jawaban A',
      'Jawaban B',
      'Jawaban C',
      'Jawaban D',
    ],
  },
];

const Soal = () => {


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
      <TombolSoal/>
      <Pertanyaan
      page={dataSoal[pageIndex]}
      onPrev={handlePrev}
      onNext={handleNext}
      />
    </>
  )
}



export default Soal
