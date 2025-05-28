import React from 'react';
import Headerprogres from '../../components/Isipembelajaran/Headerprogres';
import Footerp from '../../components/Isipembelajaran/FooterP';
import Daftarvideo from '../../components/Isipembelajaran/Daftarvideo';
import './Pembelajaran.css'


const Pembelajaran = () => {
  return (
    <>
      <Headerprogres />
      <main className="body1" style={{ height: '85vh', display: 'flex', flexDirection: 'row' }}>
        <div className="cont-play" style={{ width: '70%' }}>
          <img
            src="../src/assets/Playvideo.svg"
            alt="video"
            style={{ width: '100%', height: '505px' }}
          />
          <div className="card-container">
            <div className="card-text">
              <h3>Praktikkan Skill dengan Technical Book</h3>
              <p>
                Pelajari dan praktikkan skill teknis dalam berbagai industri dengan Technical Book Riselearn
              </p>
            </div>
            <div className="card-user-rating">
              <div className="user-info">
                <div className="user-avatar">
                  <img
                    src="https://i.ibb.co/ThTvf3X/avatar.png"
                    alt="avatar"
                  />
                </div>
                <div className="user-detail">
                  <strong>Jenna Ortega</strong>
                  <p>
                    Senior Accountant di <span className="highlight">Gojek</span>
                  </p>
                </div>
              </div>
              <div className="rating">
                <span className="star yellow">★</span>
                <span className="star yellow">★</span>
                <span className="star yellow">★</span>
                <span className="star gray">★</span>
                <span className="star gray">★</span>
                <span className="rating-text">3.5 (86)</span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Daftarvideo />
        </div>
      </main>
      <Footerp />
    </>
  );
};

export default Pembelajaran;
