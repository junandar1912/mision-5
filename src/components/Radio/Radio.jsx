import React from 'react'
import './Radio.css'


const Radio = ({ handleRadioChange, nama, value, checked, name = "durasi" }) => {
  return (
    <label className="radio-container5">
      <input
        type="radio"
        name={name}
        value={value}
        onChange={handleRadioChange}
        checked={checked}
        className="radio-input11"
      />
      <span className="radio-label11">{nama}</span>
    </label>
  );
};

export default Radio;