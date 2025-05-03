import React from 'react'
import './Radio.css'


const Radio = ({ handleRadioChange, nama, value, checked, name = "durasi" }) => {
  return (
    <label className="radio-container">
      <input
        type="radio"
        name={name}
        value={value}
        onChange={handleRadioChange}
        checked={checked}
        className="radio-input"
      />
      <span className="radio-label">{nama}</span>
    </label>
  );
};

export default Radio;