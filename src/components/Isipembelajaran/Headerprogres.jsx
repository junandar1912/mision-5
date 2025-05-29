import React, { useState } from 'react';
import Datastore from '../../Datastore.js';
import arrow from '../../assets/arrow.svg';
import arrowDown from '../../assets/ArrowDown.svg';
import Tooltip from './Tooltip.jsx';
import Review from './Review.jsx';
import './Headerprogres.css';

const Headerprogres = () => {
  const progress = Datastore((state) => state.progress);
  const percentage = (progress.current / progress.max) * 100;
  const photoProfile = Datastore(state => state.user?.photo);

  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className='header-progres'>
      <div className='main-header'>
        <div className='nav-head-progres'>
          <img src={arrow} alt="button" style={{ width: 24, height: 24, cursor: 'pointer' }} />
          <p>Foundations of User Experience Design</p>
        </div>
        <div className='nav-head-progres2'>
          <div className='indikator2'>
            <div className="progress-bar-wrapper2">
              <div className="progress-bar-container2">
                <div className="progress-bar-fill" style={{ width: `${percentage}%` }} />
              </div>
              <div className="progress-text">
                {progress.current}/{progress.max}
              </div>
            </div>
            <img
              src={arrowDown}
              alt="arrow"
              style={{ width: 24, height: 24, cursor: 'pointer', marginLeft: 8 }}
              onClick={() => setShowTooltip(!showTooltip)}
            />
          </div>
          <img src={photoProfile} alt="profil" style={{ width: 44, height: 44, borderRadius: 10 }} />
        </div>
      </div>
      <Tooltip visible={showTooltip} />
    </div>
  );
};

export default Headerprogres;
