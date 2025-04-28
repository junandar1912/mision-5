import React from 'react'
import './Radio.css'

const Radio = ({ handleRadioChange }) => {
  return (
    <div>
      <label>
        <input type="radio" name="durasi" value="kurang4" onChange={handleRadioChange} />
        Kurang dari 4 Jam
      </label>

      <label>
        <input type="radio" name="durasi" value="4to8" onChange={handleRadioChange} />
        4 - 8 Jam
      </label>

      <label>
        <input type="radio" name="durasi" value="lebih8" onChange={handleRadioChange} />
        Lebih dari 8 Jam
      </label>
    </div>
  )
}

export default Radio
