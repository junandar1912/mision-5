import React from 'react';
import './Tooltip.css';

const Tooltip = ({ visible }) => {
  if (!visible) return null; // Tidak render sama sekali jika tidak visible

  

  return (
    <div className="tooltip-container" >
      <strong>25% Modul Telah Selesai</strong>
      <hr />
      <p>Selesaikan Semua Modul Untuk Mendapatkan Sertifikat</p>
      <button className="btn-disabled" disabled>Ambil Sertifikat</button>
    </div>
  );
};

export default Tooltip;
