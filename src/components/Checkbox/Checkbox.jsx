import React from 'react';
import './Checkbox.css';


const Checkbox = ({ label, name, defaultChecked, props, namaCheckbox }) => {
  return (
    <label className="checkbox-container">
      <input 
        type="checkbox" 
        className="check" 
        name={name}
        defaultChecked={defaultChecked} 
        {...props}
      />
      <span className="checkmark"></span>
      {label && <span className="label-text">{label}</span>}
      <p className='name-check'>{ namaCheckbox }</p>      
    </label>
  );
};


export default Checkbox;
