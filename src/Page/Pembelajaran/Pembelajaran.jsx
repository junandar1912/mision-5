import React from 'react';
import Headerprogres from '../../components/Isipembelajaran/Headerprogres';
import Footerp from '../../components/Isipembelajaran/FooterP';
import Daftarvideo from '../../components/Isipembelajaran/Daftarvideo';
import './Pembelajaran.css'


const Pembelajaran = () => {
  return (
    <>
      <Headerprogres />
      <main className="body1">
        <div className="cont-play">
          <img
            src="../src/assets/Playvideo.svg"
            alt="video"
            style={{ width: '100%', height: '505px' }}
          />
        </div>
        <Daftarvideo />
      </main>
      <Footerp />
    </>
  );
};

export default Pembelajaran;
