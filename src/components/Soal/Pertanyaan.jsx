import React, { useState } from 'react';
import './Pertanyaan.css';

export default function Pertanyaan({ page, onPrev, onNext }) {
  const [jawaban, setJawaban] = useState('');

  const handleChange = (e) => {
    setJawaban(e.target.value);
  };

  return (
    <div className="container-soal">
      <h2 className="judul-pertanyaan">Pertanyaan {page.nomor}</h2>
      <p className="deskripsi-pertanyaan">{page.pertanyaan}</p>

      <div className="opsi-jawaban">
        {page.opsi.map((opsi, idx) => (
          <div className="opsi" key={idx}>
            <input
              type="radio"
              id={`opsi-${idx}`}
              name="jawaban"
              value={opsi}
              checked={jawaban === opsi}
              onChange={handleChange}
            />
            <label htmlFor={`opsi-${idx}`}>{opsi}</label>
          </div>
        ))}
      </div>

      <div className="tombol-navigasi">
        <button
          className="tombol-sebelumnya"
          onClick={onPrev}
          disabled={page.nomor === 1}
        >
          ← Sebelumnya
        </button>
        <button
          className="tombol-selanjutnya"
          onClick={() => onNext(jawaban)}
          disabled={!jawaban}
        >
          Selanjutnya →
        </button>
      </div>
    </div>
  );
}
