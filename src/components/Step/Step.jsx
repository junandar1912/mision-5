import React from 'react'
import './Step.css'


const Step = ( { handleRadioChange, checked, nama, perlihatkan,}) => {
  return (
    <div className='step9'>
      <label className='step-contan9'>
          <p className='p-step9'>{nama}</p>
          <input type="radio" onChange={handleRadioChange} checked={checked} className='radio-input-19' disabled/>
          {perlihatkan && <span className='divider15' checked={checked} onChange={handleRadioChange}></span>}
      </label>  
    </div>
  )
}
export default Step
