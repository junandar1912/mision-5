import React, { useState } from "react";
import "./TombolSoal.css";

const TombolSoal = ({ jumlahSoal = 10 }) => {
  // state nomor soal yang aktif, default 1
  const [aktif, setAktif] = useState(1);

  // fungsi ketika tombol soal diklik
  const handleKlik = (nomor) => {
    setAktif(nomor);
  };

  return (
    <div className="container-tombol-soal">
      <h3>List Soal</h3>
      <div className="list-tombol">
        {[...Array(jumlahSoal)].map((_, i) => {
          const nomor = i + 1;
          return (
            <button
              key={nomor}
              className={`tombol-soal ${aktif === nomor ? "aktif" : ""}`}
              onClick={() => handleKlik(nomor)}
              type="button"
            >
              {nomor}
            </button>
          );
        })}
      </div>
      <div className="catatan-soal">
        Selesaikan semua soal untuk <br /> mengakhiri quiz
      </div>
    </div>
  );
};

export default TombolSoal;

