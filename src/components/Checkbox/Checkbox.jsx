import React from 'react';
import './Checkbox.css';


const Checkbox = ({ label, name, defaultChecked, props, }) => {
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
      {label && <p className="label-text">{label}</p>}      
    </label>
  );
};


export default Checkbox;
