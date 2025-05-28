import React from 'react';
import Datastore from '../../Datastore';
import './FooterP.css'

const Footerp = () => {
  const progress = Datastore((state) => state.progress);
  const updateProgressCurrent = Datastore((state) => state.updateProgressCurrent);

  const handleNext = () => {
    updateProgressCurrent(progress.current + 1);
  };

  const handlePrev = () => {
    updateProgressCurrent(progress.current - 1 < 0 ? 0 : progress.current - 1);
  };

  return (
    <div className='footerP'>
      <button onClick={handlePrev} className='btn-HP'>
        <i className="fas fa-arrow-left" style={{ fontSize: '20px', marginRight: '10px' }}>
        </i>Foundations of User Experience Design
      </button>
      <button onClick={handleNext} className='btn-HP'>
        Foundations of User Experience Design
        <i className="fas fa-arrow-right" style={{ fontSize: '20px', marginLeft: '10px'}}></i>        
      </button>
    </div>
  );
};

export default Footerp;
