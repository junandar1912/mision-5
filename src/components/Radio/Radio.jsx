import React from 'react'
import './Radio.css'

const Radio = ({ handleRadioChange, nami }) => {
  return (
    <div className='Radio-container'>
      <div className='Radio-label'>
        <input type="radio" name="durasi" value="kurang4" onChange={handleRadioChange} className='radio-switch'/>
        <p className='name-check'>{ nami }</p>
      </div>
    </div>
  )
}

export default Radio
