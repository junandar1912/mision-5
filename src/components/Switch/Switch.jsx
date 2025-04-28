import React from 'react'

const Switch = ({ label, onChange, name, value }) => {
    const handleChange = (e) => {
      if (onChange) {
        onChange(e);
      }
    };
  
    return (
      <label className="switch">
        <input
          type="checkbox"
          name={name}
          value={value}
          onChange={handleChange}
        />
        <span className="slider"></span>
        {label && <span className="switch-label">{label}</span>}
      </label>
    );
  };

export default Switch
