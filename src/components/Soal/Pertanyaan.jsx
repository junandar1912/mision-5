import React, { useState } from 'react';
import './Pertanyaan.css';

export default function Pertanyaan({ page, onPrev, onNext }) {
  const [jawaban, setJawaban] = useState('');

  const handleChange = (e) => {
    setJawaban(e.target.value);
  };

  return (
    <div className="container-soal20">
      <main className='judul-pertanyaan1'>
      <h2 className="judul-pertanyaan">Pertanyaan {page.nomor}</h2>
      <p className="deskripsi-pertanyaan">{page.pertanyaan}</p>

      <div className="opsi-jawaban">
        {page.opsi.map((opsi, idx) => (
          <button className="opsi1" key={idx}>
            <input
              className='check'
              type="radio"
              id={`opsi-${idx}`}
              name="jawaban"
              value={opsi}
              checked={jawaban === opsi}
              onChange={handleChange}
            />
            <label htmlFor={`opsi-${idx}`} className='opsi'>{opsi}</label>
          </button>
        ))}
      </div>
      </main>

      <div className="tombol-navigasi">
        <button
          className="tombol-sebelumnya"
          onClick={onPrev}
          disabled={page.nomor === 1}
        >
          <span className='panah'>←</span> Sebelumnya
        </button>
        <button
          className="tombol-selanjutnya"
          onClick={() => onNext(jawaban)}
          disabled={!jawaban}
        >
          Selanjutnya <span className='panah'>→</span>
        </button>
      </div>
    </div>
  );
}
