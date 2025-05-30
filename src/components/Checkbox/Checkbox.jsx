import React from 'react';
import './Checkbox.css';


const Checkbox = ({ label, name, defaultChecked, props,checked }) => {
  return (
    <label className="checkbox-container">
      <input 
        type="checkbox" 
        className="check"
        checked={checked} 
        name={name}
        defaultChecked={defaultChecked} 
        {...props}
      />
      <span className="checkmark"></span>
      {label && <p className="label-text">{label}</p>}      
    </label>
  );
};


export default Checkbox;
